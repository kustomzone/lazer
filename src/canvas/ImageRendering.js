export function crisp (canvas) {

    let types = [ 'optimizeSpeed', 'crisp-edges', '-moz-crisp-edges', '-webkit-optimize-contrast', 'optimize-contrast', 'pixelated' ];

    for (let i = 0; i < types.length; i++)
    {
        canvas.style['image-rendering'] = types[i];
    }

    canvas.style.msInterpolationMode = 'nearest-neighbor';

    return canvas;

}

export function bicubic (canvas) {

    canvas.style['image-rendering'] = 'auto';
    canvas.style.msInterpolationMode = 'bicubic';

    return canvas;

}
