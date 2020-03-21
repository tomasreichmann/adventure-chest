import stringify from "json-stable-stringify";
import { IState } from "./usePromise";
import {
  ContentItem,
  DeliveryClient,
  TaxonomyGroup,
  MultipleItemQuery
} from "@kentico/kontent-delivery";
import { useMemo } from "react";
import { projectId } from "../../kontent";

const filterQuery = <V extends ContentItem>(
  query: MultipleItemQuery<V>,
  filterQueries: IFilterQuery[],
): MultipleItemQuery<V> => {
  const nextFilterQuery = filterQueries[0];
  const nextQuery = query.anyFilter(
    nextFilterQuery.element,
    nextFilterQuery.values
  );
  if (filterQueries.length > 1) {
    return filterQuery(nextQuery, filterQueries.slice(1));
  }
  return nextQuery;
};

interface IFilterQuery {
  element: string;
  values: string[];
}

const getFilterQueries = (filters: TaxonomyGroup[]): IFilterQuery[] => {
  return filters.map(filter => {
    return {
      element: `elements.${filter.system.codename}`,
      values: filter.terms.map(term => term.codename)
    };
  })
}

export function useKontentItems<V extends ContentItem>(
  {
    type,
    elements = null,
    filters = []
  }: {
    type?: string;
    elements?: string[] | null;
    filters?: TaxonomyGroup[];
  },
  setState: React.Dispatch<React.SetStateAction<IState<V[]>>>
): void {
  const filterQueries = getFilterQueries(filters);
  useMemo(() => {
    try {
      const deliveryClient = new DeliveryClient({
        projectId
      });
      const delivery = deliveryClient.items<V>();
      const query = type ? delivery.type(type) : delivery;
      const queryWithElements =
        elements !== null && elements.length > 0
          ? query.elementsParameter(elements)
          : query;

      const queryWithElementsAndFilters =
        filters.length > 0
          ? filterQuery<V>(queryWithElements, filterQueries)
          : queryWithElements;

      queryWithElementsAndFilters.toObservable().subscribe(
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
  }, [type, stringify(elements), stringify(filterQueries)]); // Changes to this line can cause infinite re-renders, make sure the reference integrity is maintained. Ideally only use primitives.
}

export default useKontentItems;
