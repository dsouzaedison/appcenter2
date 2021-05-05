//
//  TestBridge.m
//  appCenter
//
//  Created by Edison Dsouza on 05/05/21.
//

#import "TestBridge.h"

@implementation TestBridge
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(
                  getVersionCode:(NSString *)temp
                  get:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject
                  )
{
//  NSDictionary* infoDictionary = [[NSBundle mainBundle] infoDictionary];
//  NSString* appID = infoDictionary[@"CFBundleIdentifier"];
//  NSURL* url = [NSURL URLWithString:[NSString stringWithFormat:@"http://itunes.apple.com/lookup?bundleId=%@", appID]];
//  NSData* data = [NSData dataWithContentsOfURL:url];
//  NSDictionary* lookup = [NSJSONSerialization JSONObjectWithData:data options:0 error:nil];
//  if ([lookup[@"resultCount"] integerValue] == 1){
//      NSString* storeVersion = lookup[@"results"][0][@"version"];
//      NSString* currentVersion = infoDictionary[@"CFBundleShortVersionString"];
//      if (![storeVersion isEqualToString:currentVersion]){
//          NSLog(@"Need to update [%@ != %@]", storeVersion, currentVersion);
//      }
//    NSDictionary *jsonBodyDict = @{@"storeVersion":storeVersion, @"currentVersion":currentVersion};
//    NSLog(@"Version number", jsonBodyDict);
//    resolve(jsonBodyDict);
//  }
  NSLog(@"Hello from iOS");
  resolve(@"Hello from iOS");
}
@end
