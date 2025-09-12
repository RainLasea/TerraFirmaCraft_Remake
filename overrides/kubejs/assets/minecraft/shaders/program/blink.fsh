#version 150

uniform sampler2D DiffuseSampler;
in vec2 texCoord;

uniform float BlinkIntensity;

out vec4 fragColor;

void main() {
    vec4 src = texture(DiffuseSampler, texCoord);
    vec3 color = mix(src.rgb, vec3(1.0, 1.0, 1.0), BlinkIntensity);
    fragColor = vec4(color, 1.0);
}
