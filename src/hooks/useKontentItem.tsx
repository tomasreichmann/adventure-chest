import { IState } from "./usePromise";
import { ContentItem, DeliveryClient } from "@kentico/kontent-delivery";
import { useMemo } from "react";

const projectId = "3c06f979-fd86-4755-9c77-0f7a4c3f3cd6";

export function useKontentItem<V extends ContentItem>(
  codename: string,
  elements: string[] | null = null,
  setState: React.Dispatch<React.SetStateAction<IState<V>>> = (data) => { console.log('No setState defined', data) }
): void {
  useMemo(() => {
    if (codename) {
      try {
        const deliveryClient = new DeliveryClient({
          projectId: projectId
        });
        const delivery = deliveryClient.item<V>(codename);
        const queryWithElements =
          elements !== null && elements.length > 0
            ? delivery.elementsParameter(elements)
            : delivery;

        queryWithElements.toObservable().subscribe(
          response => {
            response
            setState({
              value: response.item,
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
    }
  }, [codename, JSON.stringify(elements)]); // Changes to this line can cause inifinite rereners, make sure the reference integrity is maintained. Ideally only use primitives.
}

export default useKontentItem;
