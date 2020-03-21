import { IState } from "./usePromise";
import { ContentItem, DeliveryClient } from "@kentico/kontent-delivery";
import { useMemo } from "react";
import { projectId } from "../../kontent";

export function useKontentItem<V extends ContentItem>(
  codename: string,
  elements: string[] | null = null,
  setState: React.Dispatch<React.SetStateAction<IState<V>>> = (data) => { console.log('No setState defined', data) }
): void {
  useMemo(() => {
    if (codename) {
      try {
        const deliveryClient = new DeliveryClient({
          projectId
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
  }, [codename, JSON.stringify(elements)]); // Changes to this line can cause infinite re-renders, make sure the reference integrity is maintained. Ideally only use primitives.
}

export default useKontentItem;
