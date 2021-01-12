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
