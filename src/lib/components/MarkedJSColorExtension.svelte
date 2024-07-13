<script context="module">

export const CustomColorExt = {
  name: "custom-colors",
  level: "inline",
  start(src) {
    return src.match(/<\#/)?.index;
  },
  tokenizer(src, tokens) {
    const rule = /^<\#([0-9A-Fa-f]{6})>\((.*?)\)/;
    const match = rule.exec(src);

    if (match) {
      const token = {
        type: "custom-colors",
        raw: match[0],
        text: this.lexer.inlineTokens(match[2].trim()),
        color: this.lexer.inlineTokens(match[1].trim()),
      };
      return token;
    }
    return;
  },
  renderer(token) {
    return `<span style="color: #${this.parser.parseInline(token.color)} !important;">${this.parser.parseInline(token.text)}</span>`;
  },
  childTokens: ['text'], 
};
</script>