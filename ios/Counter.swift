// Counter.swift
import Foundation

//extension NSDate {
//    func dateFromString(date: String, format: String) -> Date {
//        let formatter = DateFormatter()
//        let locale = Locale(identifier: "en_US_POSIX")
//
//        formatter.locale = locale
//        formatter.dateFormat = format
//
//        return formatter.date(from: date)!
//    }
//}

@objc(Counter)
class Counter: NSObject {
  // Accepts a string from react native, prints it and returns a string back to react native
  @objc
  func log(_ text: String, resolve: (_ data: String) -> Void, reject: (_ data: String) -> Void) -> Void {
    print("Your text is \(text)")
    resolve("Response from Swift")
  }
  
//  @objc
//  func logDate() -> Void {
//    print("Date: \(getCurrentShortDate())")
//  }
//
//  @objc
//  func getSum(_ params: [Int]) -> Int {
//    var sum = 0
//
//    for item in params {
//      sum += item
//    }
//    return sum
//  }
//
//  @objc
//  func getCurrentShortDate() -> String {
//    let todaysDate = NSDate()
////      .dateFromString(date: "2015-02-04 23:29:28", format:  "yyyy-MM-dd HH:mm:ss")
//
//    let dateFormatter = DateFormatter()
//      dateFormatter.dateFormat = "MM-dd-YYYY hh:mm:ss"
////    var DateInFormat = dateFormatter.stringFromDate(todaysDate)
//
//    let DateInFormat = dateFormatter.string(for: todaysDate)
//
//      return DateInFormat!
//  }
//
//  @objc
//    func constantsToExport() -> [AnyHashable : Any]! {
//      return [
//        "number": 123.9,
//        "string": "foo",
//        "boolean": true,
//        "array": [1, 22.2, "33"],
//        "object": ["a": 1, "b": 2]
//      ]
//    }

//    @objc func testCallback(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
//
//    }
}
