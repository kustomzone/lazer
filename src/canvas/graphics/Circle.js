//  Warning: Doesn't begin or close the path

//  rotation is in radians
export default function Circle (context, x, y, radius = 128, rotation = 0, fromCenter = false) {

    context.save();

    context.translate(x, y);
    context.rotate(rotation);

    if (fromCenter)
    {
        context.moveTo(0, 0);
    }

    context.arc(0, 0, radius, 0, 2 * Math.PI);

    context.restore();

    return context;

}