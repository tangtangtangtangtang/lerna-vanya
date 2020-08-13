import React, { useState, useCallback, useEffect, useImperativeHandle } from 'react';
import classnames from 'classnames';
import videojs, { load } from 'video.js';
import 'video.js/dist/video-js.css';

interface ObjectAny {
    [props: string]: any
}

interface IProps {
    src: string;
    className?: string;
    autoplay?: boolean;
    poster?: string;
    options?: ObjectAny;
    onVideoStatusChange?: (r: any, type: string, player: any) => void;
    // 暂停时的显示内容
    pausedDom?: any;
    errorDom?: any;
}

enum VIDEO_STATUS {
    pause = 'pause',
    playing = 'playing',
    ended = 'ended',
    error = 'error',
}

export default React.forwardRef(
    (
        {
            src = '',
            className,
            autoplay = false,
            poster = '',
            options = {},
            onVideoStatusChange = () => { },
            pausedDom = '',
            errorDom = '',
        }: IProps,
        ref
    ) => {
        const [player, setPlayer] = useState(null);
        const [randomId] = useState(
            `component-video-${(Math.random() * 1000).toFixed()}-container-${(Math.random() * 1000).toFixed()}`
        );
        const [randomVideoId] = useState(`video-component${(Math.random() * 1000).toFixed()}`);
        const [videoStatus, setVideoStatus] = useState(VIDEO_STATUS.pause);

        const onStatusChange = useCallback((id, status, player) => {
            setVideoStatus(status);
            onVideoStatusChange(id, status, player);
        }, []);
        useEffect(() => {
            const defaultOptions = {
                preload: 'metadata',
                autoplay: autoplay ? 'muted' : false,
                loop: false,
                poster,
                sources: [
                    {
                        src,
                        type: 'video/mp4',
                    },
                ],
                webkitPlaysinline: true,
                playsinline: true,
                controls: true,
                withCredentials: true,
                liveui: true,
            };
            let player;
            try {
                player = videojs(randomVideoId, Object.assign(defaultOptions, options), function () {
                    this.on('error', () => {
                        console.log('player -> error');
                        onStatusChange(randomId, VIDEO_STATUS.error, player);
                    });
                    this.on('pause', () => {
                        onStatusChange(randomId, VIDEO_STATUS.pause, player);
                    });
                    this.on('ended', () => {
                        onStatusChange(randomId, VIDEO_STATUS.ended, player);
                    });
                    this.on('play', () => {
                        onStatusChange(randomId, VIDEO_STATUS.playing, player);
                    });
                    if (autoplay) {
                        this.play();
                        onStatusChange(randomId, VIDEO_STATUS.playing, player);
                    }
                });
                player.addClass('vjs-matrix');
                setPlayer(player);
            } catch (error) {
                console.log('onVideoStatusChange -> error', error);
                onStatusChange(randomId, VIDEO_STATUS.error, player);
            }

            return () => {
                if (player !== null) {
                    player.dispose();
                }
            };
        }, []);

        useImperativeHandle(ref, () => ({ player }));
        return (
            <div id={randomId} className={classnames('component-video-container', className)}>
                {[VIDEO_STATUS.pause, VIDEO_STATUS.ended].indexOf(videoStatus) !== -1 && pausedDom}
                {VIDEO_STATUS.error === videoStatus && errorDom}
                <div>
                    <video
                        x5-video-player-type="h5"
                        x5-video-player-fullscreen="true"
                        x5-playsinline={'true'}
                        id={randomVideoId}
                        className="video-component"
                    />
                </div>
            </div>
        );
    }
);
