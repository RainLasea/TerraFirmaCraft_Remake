#version 150
uniform sampler2D DiffuseSampler;
in vec2 texCoord;

out vec4 fragColor;

void main() {
    vec4 src = texture(DiffuseSampler, texCoord);
    fragColor = vec4(src.rgb, 1.0);
}
