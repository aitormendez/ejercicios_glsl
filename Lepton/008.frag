#ifdef GL_ES
precision mediump float;
#endif

uniform vec2    u_resolution;
uniform vec2    u_mouse;
uniform float   u_time;

const float PI = 3.1415926535;


float polygonshape(vec2 position, float radius, float sides){
	position = position * 2.0 - 1.0;
	float angle = atan(position.x, position.y);
	float slice = PI * 2.0 / sides;

	return step(radius, cos(floor(0.5 + angle / slice) * slice - angle) * length(position));
}


void main(void) {
    vec2 position = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);

    float polygon = polygonshape(position, 0.2, 7.0);

    color = vec3(polygon);

    gl_FragColor = vec4(color, 1.0);
}
  