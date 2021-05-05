#import "React/RCTBridgeModule.h"
#import <React/RCTViewManager.h>
@interface RCT_EXTERN_MODULE(Counter, NSObject)
RCT_EXTERN_METHOD(log: (NSString)text resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
//RCT_EXTERN_METHOD(getSum: (NSArray)params callback:(RCTResponseSenderBlock))
//RCT_EXTERN_METHOD(logDate)
@end
