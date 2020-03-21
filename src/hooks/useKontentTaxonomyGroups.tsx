import { IState } from "./usePromise";
import { ContentItem, DeliveryClient, TaxonomyGroup } from "@kentico/kontent-delivery";
import { useMemo } from "react";
import { projectId } from "../../kontent";

export function useKontentTaxonomyGroups(
  setState: React.Dispatch<React.SetStateAction<IState<TaxonomyGroup[]>>> = (data) => { console.log('No setState defined', data) }
): void {
  useMemo(() => {
    try {
      const deliveryClient = new DeliveryClient({
        projectId
      });
      const delivery = deliveryClient.taxonomies();

      delivery.toObservable().subscribe(
        response => {
          setState({
            value: response.taxonomies,
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
  }, ["never"]); // Changes to this line can cause infinite re-renders, make sure the reference integrity is maintained. Ideally only use primitives.
}

export default useKontentTaxonomyGroups;
