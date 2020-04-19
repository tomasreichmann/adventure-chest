import { ContentItem, Elements } from "@kentico/kontent-delivery";

export interface Adventure extends ContentItem {
  name: Elements.TextElement;
  perex: Elements.RichTextElement;
  game_system: Elements.TaxonomyElement;
}

export interface Master extends ContentItem {
  name: Elements.TextElement;
  top_text: Elements.RichTextElement;
}
