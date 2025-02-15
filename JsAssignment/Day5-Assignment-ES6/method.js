//area of circle, rectangle, cylinder.

const piVal = 3.14159;//22/7;

const area = (radius)=>{
    return piVal * radius * radius;
}

const rectangle = (length, width)=>{
    return length * width;
}

const cylinder = (radius, height)=>{
    return 2 * piVal * radius * (radius + height);
}

module.exports = {
    piVal,
    area,
    rectangle,
    cylinder
}