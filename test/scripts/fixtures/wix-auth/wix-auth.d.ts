// It compares the result to a snapshot, if lint fixes this file snapshot will fail
/* eslint-disable */
declare module 'wix-auth' {
  /**
   * Returns an instance of the specified function for which the site visitor's permissions have been elevated to the highest level required.
   * 	[Read more](https://www.wix.com/corvid/reference/wix-auth.html#elevate)
   */
  function elevate(functionName: Function): Function;
}
/* eslint-enable */
