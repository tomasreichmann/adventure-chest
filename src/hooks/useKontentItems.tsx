import { IState } from "./usePromise";
import { ContentItem, DeliveryClient } from "@kentico/kontent-delivery";
import { useMemo } from "react";

const projectId = "3c06f979-fd86-4755-9c77-0f7a4c3f3cd6";

export function useKontentItems<V extends ContentItem>(
  type: string,
  elements: string[] | null = null,
  setState: React.Dispatch<React.SetStateAction<IState<V[]>>>
): void {
  useMemo(() => {
    try {
      const deliveryClient = new DeliveryClient({
        projectId: projectId
      });
      const delivery = deliveryClient.items<V>();
      const query = type ? delivery.type(type) : delivery;
      const queryWithElements =
        elements !== null && elements.length > 0
          ? query.elementsParameter(elements)
          : query;

      queryWithElements.toObservable().subscribe(
        response => {
          setState({
            value: response.items,
            error: null,
            isPending: false
          });
        },
        error => {
          console.log("error", error);
          setState(state => ({
            ...state,
            error,
            isPending: false
          }));
        }
      );
    } catch (error) {
      console.log("error", error);
      setState(state => ({
        ...state,
        error,
        isPending: false
      }));
    }
  }, [type, JSON.stringify(elements)]); // Changes to this line can cause inifinite rereners, make sure the reference integrity is maintained. Ideally only use primitives.
}

export default useKontentItems;
