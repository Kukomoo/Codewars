/* For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:*/ 
class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this.count = collection.length;
    this.arr = collection;
    this.itemsPerPage = itemsPerPage;
    
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.count
	}
	pageCount() {
	// returns the number of pages
    let pageCountt = 0
    let remaningItems = this.count
    while(remaningItems > 0){
      remaningItems -= this.itemsPerPage
      pageCountt++
	}
    return pageCountt
  }
// 	pageItemCount(pageIndex) {
// 	// returns the number of items on the current page. page_index is zero based.
// 	// this method should return -1 for pageIndex values that are out of range
//     if(this.arr.length === 0){
//       return -1
//     }
// //     else if(pageIndex === 0){
// //       return this.count
// //     }
//     else if(pageIndex > this.pageCount()){
//       return -1
//     } else if(this.count % this.itemsPerPage === 0){
//         return this.itemsPerPage 
//     }
//     else if(pageIndex < this.pageCount()){
//       return this.itemsPerPage }
// //     } else if (pageIndex == this.pageCount()){
// //       let finalresult = this.count - (pageIndex * this.itemsPerPage)
// //       return finalresult
// //     }
//     else {
//        // Calculate the starting index of the items on the specified page
//   const startIdx = pageIndex * this.itemsPerPage;

//   // Calculate the ending index of the items on the specified page
//   const endIdx = startIdx + this.itemsPerPage;

//   // Check if the ending index is beyond the length of the collection
//   // If true, return the remaining items on the last page
//   // If false, return the number of items per page
//   return endIdx > this.collection.length ? this.collection.length - startIdx : this.itemsPerPage;
//     }
//   }
  pageItemCount(pageIndex) {
  // Check if pageIndex is out of range
  if (pageIndex < 0 || pageIndex >= this.pageCount()) {
    return -1;
  }

  // Calculate the starting index of the items on the specified page
  const startIdx = pageIndex * this.itemsPerPage;

  // Calculate the ending index of the items on the specified page
  const endIdx = startIdx + this.itemsPerPage;

  // Check if the ending index is beyond the length of the collection
  // If true, return the remaining items on the last page
  // If false, return the number of items per page
  return endIdx > this.count ? this.count - startIdx : this.itemsPerPage;
}

    
	
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    if(itemIndex >= this.count || itemIndex < 0){
      return -1 }
    else if(this.count === 0){
      return -1
    }
    else if(itemIndex < this.itemsPerPage){
      return 0 }
     else {
      return Math.floor(itemIndex / this.itemsPerPage)
      }
    }
  }

