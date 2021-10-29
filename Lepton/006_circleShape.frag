#ifdef GL_ES
precision mediump float;
#endif

uniform vec2    u_resolution;
uniform vec2    u_mouse;
uniform float   u_time;

float circleshape(vec2 position, float radius) {
    return step(radius, length(position - vec2(0.5)));
}

void main(void) {
    vec2 position = gl_FragCoord.xy/u_resolution.xy;

    float circle = circleshape(position, sin(u_time * 10.0) * 0.1 + 0.3);

    vec3 color = vec3(circle);

    gl_FragColor = vec4(color, 1.0);
}
  