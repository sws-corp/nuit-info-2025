declare module 'react-easy-panzoom' {
  import { Component, ReactNode } from 'react';

  export interface PanZoomProps {
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    disableKeyInteraction?: boolean;
    realPinch?: boolean;
    keyMapping?: Record<string, { x: number; y: number; z: number }>;
    minZoom?: number;
    maxZoom?: number;
    enableBoundingBox?: boolean;
    boundaryRatioVertical?: number;
    boundaryRatioHorizontal?: number;
    onPanStart?: (event: MouseEvent | TouchEvent) => void;
    onPan?: (x: number, y: number) => void;
    onPanEnd?: (x: number, y: number) => void;
    onZoom?: (zoom: number) => void;
    onStateChange?: (state: { x: number; y: number; zoom: number }) => void;
  }

  export default class PanZoom extends Component<PanZoomProps> {
    zoomIn(zoomSpeed?: number): void;
    zoomOut(zoomSpeed?: number): void;
    autoCenter(zoomLevel?: number, animate?: boolean): void;
    reset(): void;
    moveByRatio(x: number, y: number, moveSpeedRatio?: number): void;
    rotate(angle: number | ((prevAngle: number) => number)): void;
  }
}