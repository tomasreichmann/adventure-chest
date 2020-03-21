import { ContentItem, Elements } from "@kentico/kontent-delivery";

export interface Adventure extends ContentItem {
  name: Elements.TextElement;
  perex: Elements.RichTextElement;
  game_system: Elements.TaxonomyElement;
}
