#ifdef GL_ES
precision mediump float;
#endif

uniform vec2    u_resolution;
uniform float   u_time;


float circleshape(vec2 position, float radiusA, float radiusB) {
    return smoothstep(radiusA, radiusB, length(position - vec2(0.5)));
}

void main(void) {
    vec2 coord = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);
    vec2 translate = vec2(sin(u_time * 0.5) * 0.4, cos(u_time * 1.2) * 0.4);
    coord += translate * 0.5;
    float smoothBase = sin(u_time * 2.0);
    color.r += float(circleshape(
        coord, 
        smoothBase * 0.05 + 0.1, 
        smoothBase * 0.05 + 0.1 + abs(sin(u_time * 1.5) * 0.5)
    ));
    color.g += float(circleshape(
        coord, 
        smoothBase * 0.08 + 0.1, 
        smoothBase * 0.08 + 0.1 + abs(sin(u_time * 0.5) * 0.5)
    ));
    color.b += float(circleshape(
        coord, 
        smoothBase * 0.1 + 0.1, 
        smoothBase * 0.1 + 0.1 + abs(sin(u_time * 0.2) * 0.5)
    ));

    gl_FragColor = vec4(color, 1.0);
}