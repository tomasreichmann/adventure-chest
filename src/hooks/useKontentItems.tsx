// https://deliver.kontent.ai/3c06f979-fd86-4755-9c77-0f7a4c3f3cd6/items/?system.type=adventure

import { IState } from "./usePromise";
import {
  ContentItem,
  DeliveryClient,
  TypeResolver
} from "@kentico/kontent-delivery";
import { useMemo } from "react";

const projectId = "3c06f979-fd86-4755-9c77-0f7a4c3f3cd6";
const uriPrefix = `https://deliver.kontent.ai/${projectId}/`;

// // Create strongly typed models according to https://docs.kontent.ai/strongly-typed-models
// export class Article extends ContentItem {
//     public title: Elements.TextElement;
//     public summary: Elements.TextElement;
//     public post_date: Elements.DateTimeElement;
//     public teaser_image: Elements.AssetsElement;
//     public related_articles: Article[];
// }

export function useKontentItems<V extends ContentItem>(
  type?: string,
  setState?: React.Dispatch<React.SetStateAction<IState<V[]>>>
): void {
  useMemo(() => {
    try {
      const deliveryClient = new DeliveryClient({
        projectId: projectId,
        typeResolvers: [
          new TypeResolver("article", rawData => (rawData as unknown) as V)
        ]
      });
      const delivery = deliveryClient.items<V>();
      const query = type ? delivery.type(type) : delivery;
      query
        // .elementsParameter(['title', 'summary', 'post_date', 'teaser_image', 'related_articles'])
        .toObservable()
        .subscribe((response: any) => {
          if (setState) {
            // TODO: make required
            setState({
              value: response.items,
              error: null,
              isPending: false
            });
          }
        });
    } catch (error) {
      console.log("error", error);
      if (setState) {
        // TODO: make required
        setState(state => ({
          ...state,
          error,
          isPending: false
        }));
      }
    }

  }, [type]);
}

export default useKontentItems;
