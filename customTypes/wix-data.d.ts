declare module "wix-data" {
  /**
   * Creates an aggregation.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#aggregate)
   */
  function aggregate(collectionId: string): wix_data.WixDataAggregate;
  /**
   * Adds a number of items to a collection.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#bulkInsert)
   */
  function bulkInsert(collectionId: string, items: any[], options?: wix_data.WixDataOptions): Promise<wix_data.WixDataBulkResult>;
  /**
   * Removes a number of items from a collection.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#bulkRemove)
   */
  function bulkRemove(collectionId: string, itemIds: string[], options?: wix_data.WixDataOptions): Promise<wix_data.WixDataBulkResult>;
  /**
   * Inserts or updates a number of items in a collection.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#bulkSave)
   */
  function bulkSave(collectionId: string, items: any[], options?: wix_data.WixDataOptions): Promise<wix_data.WixDataBulkResult>;
  /**
   * Updates a number of items in a collection.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#bulkUpdate)
   */
  function bulkUpdate(collectionId: string, items: any[], options?: wix_data.WixDataOptions): Promise<wix_data.WixDataBulkResult>;
  /**
   * Creates a filter to be used with datasets.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#filter)
   */
  function filter(): wix_data.WixDataFilter;
  /**
   * Retrieves an item from a collection.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#get)
   */
  function get(collectionId: string, itemId: string, options?: wix_data.WixDataOptions): Promise<any>;
  /**
   * Adds an item to a collection.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#insert)
   */
  function insert(collectionId: string, item: any, options?: wix_data.WixDataOptions): Promise<any>;
  /**
   * Inserts a reference in the specified property.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#insertReference)
   */
  function insertReference(collectionId: string, propertyName: string, referringItem: any | string, referencedItem: any | string | any[] | string[], options?: wix_data.WixDataOptions): Promise<void>;
  /**
   * Checks if a reference to the referenced item exists in the specified
   *   property of the referring item.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#isReferenced)
   */
  function isReferenced(collectionId: string, propertyName: string, referringItem: any | string, referencedItem: any | string): Promise<boolean>;
  /**
   * Creates a query.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#query)
   */
  function query<T extends keyof Schemas>(collectionId: T): wix_data.WixDataQuery<Schemas[T]>;
  /**
   * Gets the full items referenced in the specified property.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#queryReferenced)
   */
  function queryReferenced(collectionId: string, item: any | string, propertyName: string, options: wix_data.WixDataQueryReferencedOptions): Promise<wix_data.WixDataQueryReferencedResult>;
  /**
   * Removes an item from a collection.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#remove)
   */
  function remove(collectionId: string, itemId: string, options?: wix_data.WixDataOptions): Promise<any>;
  /**
   * Removes a reference from the specified property.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#removeReference)
   */
  function removeReference(collectionId: string, propertyName: string, referringItem: any | string, referencedItem: any | string | any[] | string[], options?: wix_data.WixDataOptions): Promise<void>;
  /**
   * Replaces current references with references in the specified property.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#replaceReferences)
   */
  function replaceReferences(collectionId: string, propertyName: string, referringItem: any | string, referencedItem: any | string | any[] | string[], options?: wix_data.WixDataOptions): Promise<void>;
  /**
   * Inserts or updates an item in a collection.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#save)
   */
  function save(collectionId: string, item: any, options?: wix_data.WixDataOptions): Promise<any>;
  /**
   * Creates a sort to be used with the dataset `setSort()` function.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#sort)
   */
  function sort(): wix_data.WixDataSort;
  /**
   * Removes all items from a collection.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#truncate)
   */
  function truncate(collectionId: string, options?: wix_data.WixDataOptions): Promise<void>;
  /**
   * Updates an item in a collection.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#update)
   */
  function update(collectionId: string, item: any, options?: wix_data.WixDataOptions): Promise<any>;
}

declare namespace wix_data {
  /**
   * Provides functionality for refining a filter.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#)
   */
  interface WixDataFilter {
      /**
       * Adds an `and` condition to the query or filter.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#and)
       */
      and(query: wix_data.WixDataQuery): wix_data.WixDataQuery;
      /**
       * Refines a query or filter to match items whose specified property value is within a specified range.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#between)
       */
      between(propertyName: string, rangeStart: string | number | Date, rangeEnd: string | number | Date): wix_data.WixDataQuery;
      /**
       * Refines a query or filter to match items whose specified property value contains a specified string.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#contains)
       */
      contains(propertyName: string, string: string): wix_data.WixDataQuery;
      /**
       * Refines a query or filter to match items whose specified property value ends with a specified string.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#endsWith)
       */
      endsWith(propertyName: string, string: string): wix_data.WixDataQuery;
      /**
       * Refines a query or filter to match items whose specified property value equals the specified value.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#eq)
       */
      eq(propertyName: string, value: any): wix_data.WixDataQuery;
      /**
       * Refines a query or filter to match items whose specified property value is greater than or equal to the specified value.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#ge)
       */
      ge(propertyName: string, value: string | number | Date): wix_data.WixDataQuery;
      /**
       * Refines a query or filter to match items whose specified property value is greater than the specified value.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#gt)
       */
      gt(propertyName: string, value: string | number | Date): wix_data.WixDataQuery;
      /**
       * Refines a query or filter to match items whose specified property values equals all of the specified `value` parameters.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#hasAll)
       */
      hasAll(propertyName: string, value: string | number | Date | any[]): wix_data.WixDataQuery;
      /**
       * Refines a query or filter to match items whose specified property value equals any of the specified `value` parameters.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#hasSome)
       */
      hasSome(propertyName: string, value: string | number | Date | any[]): wix_data.WixDataQuery;
      /**
       * Refines a query or filter to match items whose specified property does not exist or does not have any value.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#isEmpty)
       */
      isEmpty(propertyName: string): wix_data.WixDataQuery;
      /**
       * Refines a query or filter to match items whose specified property has any value.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#isNotEmpty)
       */
      isNotEmpty(propertyName: string): wix_data.WixDataQuery;
      /**
       * Refines a query or filter to match items whose specified property value is less than or equal to the specified value.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#le)
       */
      le(propertyName: string, value: string | number | Date): wix_data.WixDataQuery;
      /**
       * Refines a query or filter to match items whose specified property value is less than the specified value.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#lt)
       */
      lt(propertyName: string, value: string | number | Date): wix_data.WixDataQuery;
      /**
       * Refines a query or filter to match items whose specified property value does not equal the specified value.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#ne)
       */
      ne(propertyName: string, value: any): wix_data.WixDataQuery;
      /**
       * Adds a `not` condition to the query or filter.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#not)
       */
      not(query: wix_data.WixDataQuery): wix_data.WixDataQuery;
      /**
       * Adds an `or` condition to the query or filter.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#or)
       */
      or(query: wix_data.WixDataQuery): wix_data.WixDataQuery;
      /**
       * Refines a query or filter to match items whose specified property value starts with a specified string.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#startsWith)
       */
      startsWith(propertyName: string, string: string): wix_data.WixDataQuery;
  }
  /**
   * Hooks that can be added to wix-data operations.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#)
   */
  interface Hooks {
      /**
       * A hook that is triggered after a `count()` operation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#afterCount)
       */
      afterCount(count: number, context: wix_data.Hooks.HookContext): Promise<number> & number;
      /**
       * A hook that is triggered after a `get()` operation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#afterGet)
       */
      afterGet(item: any, context: wix_data.Hooks.HookContext): Promise<any> & any;
      /**
       * A hook that is triggered after an `insert()` operation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#afterInsert)
       */
      afterInsert(item: any, context: wix_data.Hooks.HookContext): Promise<any> & any;
      /**
       * A hook that is triggered after a `find` operation, for each of the items in the query results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#afterQuery)
       */
      afterQuery(item: any, context: wix_data.Hooks.HookContext): Promise<any> & any;
      /**
       * A hook that is triggered after a `remove()` operation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#afterRemove)
       */
      afterRemove(item: any, context: wix_data.Hooks.HookContext): Promise<any> & any;
      /**
       * A hook that is triggered after an `update()` operation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#afterUpdate)
       */
      afterUpdate(item: any, context: wix_data.Hooks.HookContext): Promise<any> & any;
      /**
       * A hook that is triggered before a `count()` operation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#beforeCount)
       */
      beforeCount(query: wix_data.WixDataQuery, context: wix_data.Hooks.HookContext): Promise<wix_data.WixDataQuery> & wix_data.WixDataQuery;
      /**
       * A hook that is triggered before a `get()` operation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#beforeGet)
       */
      beforeGet(itemId: string, context: wix_data.Hooks.HookContext): Promise<string> & string;
      /**
       * A hook that is triggered before an `insert()` operation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#beforeInsert)
       */
      beforeInsert(item: any, context: wix_data.Hooks.HookContext): Promise<any> & any;
      /**
       * A hook that is triggered before a `find()` operation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#beforeQuery)
       */
      beforeQuery(query: wix_data.WixDataQuery, context: wix_data.Hooks.HookContext): Promise<wix_data.WixDataQuery> & wix_data.WixDataQuery;
      /**
       * A hook that is called before a `remove()` operation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#beforeRemove)
       */
      beforeRemove(itemId: string, context: wix_data.Hooks.HookContext): Promise<string> & string;
      /**
       * A hook that is triggered before an `update()` operation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#beforeUpdate)
       */
      beforeUpdate(item: any, context: wix_data.Hooks.HookContext): Promise<any> & any;
      /**
       * A hook that is triggered on any error or rejected Promise from any of the wix-data operations.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#onFailure)
       */
      onFailure(error: Error, context: wix_data.Hooks.HookContext): Promise<any>;
  }
  namespace Hooks {
      /**
       * An object that contains contextual information about the hook being called.
       */
      type HookContext = {
          /**
           * The ID of the collection the hook affects.
           */
          collectionName: string;
          /**
           * The current site user ID. If no user is logged in to the site it may be null.
           */
          userId: string;
          /**
           * The permissions role of the current user. Possibilities are: `anonymous`, `siteMember`,  `siteOwner` and `dataOwner`.
           */
          userRole: string;
          /**
           * The item stored in the database before an `update` or `delete` operation.
           * Will be `undefined` for all other operations.
           */
          currentItem: any;
      };
  }
  /**
   * Provides functionality for performing aggregations on collection data.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#)
   */
  interface WixDataAggregate {
      /**
       * Adds a sort to an aggregation, sorting by the items or groups by the specified properties in ascending order.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#ascending)
       */
      ascending(propertyName: string): wix_data.WixDataAggregate;
      /**
       * Refines a `WixDataAggregate` to only contain the average value from each aggregation group.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#avg)
       */
      avg(propertyName: string, projectedName?: string): wix_data.WixDataAggregate;
      /**
       * Refines a `WixDataAggregate` to contain the item count of each group in the aggregation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#count)
       */
      count(): wix_data.WixDataAggregate;
      /**
       * Adds a sort to an aggregation, sorting by the items or groups by the specified properties in descending order.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#descending)
       */
      descending(propertyName: string): wix_data.WixDataAggregate;
      /**
       * Filters out items from being used in an aggregation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#filter)
       */
      filter(filter: wix_data.WixDataFilter): wix_data.WixDataAggregate;
      /**
       * Groups items together in an aggregation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#group)
       */
      group(propertyName: string): wix_data.WixDataAggregate;
      /**
       * Filters out groups from being returned from an aggregation.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#having)
       */
      having(filter: wix_data.WixDataFilter): wix_data.WixDataAggregate;
      /**
       * Limits the number of items or groups the aggregation returns.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#limit)
       */
      limit(limit: number): wix_data.WixDataAggregate;
      /**
       * Refines a `WixDataAggregate` to only contain the maximum value from each aggregation group.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#max)
       */
      max(propertyName: string, projectedName?: string): wix_data.WixDataAggregate;
      /**
       * Refines a `WixDataAggregate` to only contain the minimum value from each aggregation group.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#min)
       */
      min(propertyName: string, projectedName?: string): wix_data.WixDataAggregate;
      /**
       * Runs the aggregation and returns the results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#run)
       */
      run(): Promise<wix_data.WixDataAggregateResult>;
      /**
       * Sets the number of items or groups to skip before returning aggregation results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#skip)
       */
      skip(skip: number): wix_data.WixDataAggregate;
      /**
       * Refines a `WixDataAggregate` to contain the sum from each aggregation group.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#sum)
       */
      sum(propertyName: string, projectedName?: string): wix_data.WixDataAggregate;
  }
  /**
   * The results of an aggregation, containing the aggregated values.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregateResult.html#)
   */
  interface WixDataAggregateResult {
      /**
       * Gets the aggregated values.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregateResult.html#items)
       */
      readonly items: any[];
      /**
       * Returns the number of values in the aggregate results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregateResult.html#length)
       */
      readonly length: number;
      /**
       * Indicates if the aggregation has more results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregateResult.html#hasNext)
       */
      hasNext(): boolean;
      /**
       * Retrieves the next page of aggregate results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregateResult.html#next)
       */
      next(): Promise<wix_data.WixDataAggregateResult>;
  }
  /**
   * Contains functionality for refining a data query.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#)
   */
  interface WixDataQuery<T> extends wix_data.WixDataFilter {
      /**
       * Adds a sort to a query or sort, sorting by the specified properties in ascending order.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#ascending)
       */
      ascending(propertyName: string): wix_data.WixDataQuery;
      /**
       * Returns the number of items that match the query.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#count)
       */
      count(options?: wix_data.WixDataOptions): Promise<number>;
      /**
       * Adds a sort to a query or sort, sorting by the specified properties in descending order.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#descending)
       */
      descending(propertyName: string): wix_data.WixDataQuery;
      /**
       * Returns the distinct values that match the query, without duplicates.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#distinct)
       */
      distinct(propertyName: string, options?: wix_data.WixDataOptions): Promise<wix_data.WixDataQueryResult>;
      /**
       * Returns the items that match the query.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#find)
       */
      find(options?: wix_data.WixDataOptions): Promise<wix_data.WixDataQueryResult<T>>;
      /**
       * Includes referenced items for the specified properties in a query's results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#include)
       */
      include(propertyName: string): wix_data.WixDataQuery;
      /**
       * Limits the number of items the query returns.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#limit)
       */
      limit(limit: number): wix_data.WixDataQuery;
      /**
       * Sets the number of items to skip before returning query results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#skip)
       */
      skip(skip: number): wix_data.WixDataQuery;
  }
  /**
   * The results of a data reference query, containing the retrieved items.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryReferencedResult.html#)
   */
  interface WixDataQueryReferencedResult {
      /**
       * Returns the items that match the reference query.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryReferencedResult.html#items)
       */
      readonly items: any[];
      /**
       * Returns the total number of items that match the reference query.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryReferencedResult.html#totalCount)
       */
      readonly totalCount: number;
      /**
       * Indicates if the reference query has more results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryReferencedResult.html#hasNext)
       */
      hasNext(): boolean;
      /**
       * Indicates if the reference query has previous results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryReferencedResult.html#hasPrev)
       */
      hasPrev(): boolean;
      /**
       * Retrieves the next page of reference query results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryReferencedResult.html#next)
       */
      next(): Promise<wix_data.WixDataQueryReferencedResult>;
      /**
       * Retrieves the previous page of reference query results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryReferencedResult.html#prev)
       */
      prev(): Promise<wix_data.WixDataQueryReferencedResult>;
  }
  /**
   * The results of a data query, containing the retrieved items.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#)
   */
  interface WixDataQueryResult<T> {
      /**
       * Returns the index of the current results page number.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#currentPage)
       */
      readonly currentPage: number;
      /**
       * Returns the items that match the query.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#items)
       */
      readonly items: T[];
      /**
       * Returns the number of items in the current results page.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#length)
       */
      readonly length: number;
      /**
       * Returns the query page size.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#pageSize)
       */
      readonly pageSize: number;
      /**
       * Indicates if referenced items have been trimmed from the results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#partialIncludes)
       */
      readonly partialIncludes: boolean;
      /**
       * Returns the query used to get the current results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#query)
       */
      readonly query: wix_data.WixDataQuery;
      /**
       * Returns the total number of items that match the query.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#totalCount)
       */
      readonly totalCount: number;
      /**
       * Returns the total number of pages the query produced.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#totalPages)
       */
      readonly totalPages: number;
      /**
       * Indicates if the query has more results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#hasNext)
       */
      hasNext(): boolean;
      /**
       * Indicates the query has previous results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#hasPrev)
       */
      hasPrev(): boolean;
      /**
       * Retrieves the next page of query results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#next)
       */
      next(): Promise<wix_data.WixDataQueryResult>;
      /**
       * Retrieves the previous page of query results.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#prev)
       */
      prev(): Promise<wix_data.WixDataQueryResult>;
  }
  /**
   * Provides functionality for sorting a query.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataSort.html#)
   */
  interface WixDataSort {
      /**
       * Adds a sort to a query or sort, sorting by the specified properties in ascending order.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataSort.html#ascending)
       */
      ascending(propertyName: string): wix_data.WixDataQuery;
      /**
       * Adds a sort to a query or sort, sorting by the specified properties in descending order.
       * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataSort.html#descending)
       */
      descending(propertyName: string): wix_data.WixDataQuery;
  }
  /**
   * An object returned by Wix Data bulk operations.
   */
  type WixDataBulkResult = {
      /**
       * The number of inserted items.
       */
      inserted: number;
      /**
       * The number of updated items.
       */
      updated: number;
      /**
       * The number of skipped items.
       */
      skipped: number;
      /**
       * List of IDs of inserted items.
       */
      insertedItemIds: string[];
      /**
       * List of errors.
       */
      errors: Error[];
      /**
       * The number of removed items.
       */
      removed: number;
      /**
       * List of IDs of removed items.
       */
      removedItemIds: string[];
  };
  /**
   * An object that you pass as the `options` parameter that modifies how an operation is performed.
   */
  type WixDataOptions = {
      /**
       * Prevents [permission](https://support.wix.com/en/article/about-collection-permissions) checks from running for the operation.
       */
      suppressAuth?: boolean;
      /**
       * Prevents [hooks](https://support.wix.com/en/article/wix-code-how-to-use-data-hooks) from running for the operation.
       */
      suppressHooks?: boolean;
  };
  /**
   * An object for controlling the order of returned referenced items.
   */
  type WixDataQueryReferencedOptions = {
      /**
       * The order of the returned referenced items. Either "asc" or "desc".
       */
      order: string;
  };
}