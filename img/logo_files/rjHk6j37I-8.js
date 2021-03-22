if (self.CavalryLogger) { CavalryLogger.start_js(["c5bkE\/f"]); }

__d("MWLSSetBlockStatus.bs",["LS.bs","LSContactOptimisticSetBlockStatusStoredProcedure","LSTransaction.bs","MWThreadKey.bs","SkytaleDBHook.bs","bs_curry","promiseDone","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a,c,d){var e=b("SkytaleDBHook.bs").useHook(void 0),f=b("MWThreadKey.bs").useIdMemoizedExn(void 0);return h.useCallback(function(g){b("promiseDone")(b("LSTransaction.bs").run(e,function(c){return b("LSContactOptimisticSetBlockStatusStoredProcedure")(f,a,void 0,!1,b("LS.bs").make(c))},"readWrite"),function(a){return b("bs_curry")._1(c,void 0)},b("bs_curry").__1(d))},[e,f])}f.useHook=a}),null);
__d("MWLSBlock.bs",["LSContactBlockedByViewerStatus.bs","MWLSSetBlockStatus.bs"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return b("MWLSSetBlockStatus.bs").useHook(b("LSContactBlockedByViewerStatus.bs").messageBlocked,a,c)}f.useHook=a}),null);
__d("MWLSUnblock.bs",["LSContactBlockedByViewerStatus.bs","MWLSSetBlockStatus.bs"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return b("MWLSSetBlockStatus.bs").useHook(b("LSContactBlockedByViewerStatus.bs").unblocked,a,c)}f.useHook=a}),null);
__d("MWUIBlock.bs",["cr:1586781"],(function(a,b,c,d,e,f){"use strict";a=b("cr:1586781").useHook;f.useHook=a}),null);
__d("MWUIUnblock.bs",["cr:1586783"],(function(a,b,c,d,e,f){"use strict";a=b("cr:1586783").useHook;f.useHook=a}),null);
__d("MWChatOpenNewTab.bs",["LSThreadAttributionStore.bs","MWChatMultitabContext.bs","MWChatMultitabDispatcher.bs","MessengerWebEvent","MessengerWebStgTypedLoggerLite.bs","ODS","react","useCometFeedNoRoutingNavigationEventLogger","useMWChatOpenTabTraceProvider"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a,c){var d=b("useMWChatOpenTabTraceProvider")(),e=b("useCometFeedNoRoutingNavigationEventLogger")(),f=h.useContext(b("MWChatMultitabContext.bs").context);return h.useCallback(function(g){e(Date.now(),"","messenger");b("ODS").bumpEntityKey(3185,"mwchat_tab","open_new");b("MessengerWebStgTypedLoggerLite.bs").log({entry_point:a,event_name:b("MessengerWebEvent").OPEN_CHAT_TAB});b("LSThreadAttributionStore.bs").setSourceForNewThread(c);return d(function(a){if(f!==void 0)return b("MWChatMultitabDispatcher.bs").dispatch(void 0,f,{TAG:0,_0:g})},"new_message",a)},[a,f,e,d])}f.useHook=a}),null);
__d("MWChatSettingsAddPeople.bs",["fbt","ix","CometMenuItem.react","ODS","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){var c=a.dispatch;a=g._("Add members");return j.jsx(b("CometMenuItem.react"),{primaryText:a,onClick:function(a){b("ODS").bumpEntityKey(3185,"mwchat_settings","add_people");return c("ToggleAddParticipants")},icon:b("fbicon")._(h("497891"),20),testid:"messenger_settings_add_people_menu"})}c=a;f.make=c}),null);
__d("MWChatSettingsBlockMember.bs",["fbt","ix","CometLazyDialogTrigger.react","CometMenuItem.react","JSResource","ODS","bs_curry","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){var c=a.participants;a=a.threadFbid;var d=g._("Block a member"),e=g._("Block a Member?"),f=b("fbicon")._(h("482898"),20);return j.jsx(b("CometLazyDialogTrigger.react"),{dialogResource:b("JSResource")("MWChatBlockMemberDialogForJSResource.react").__setRef("MWChatSettingsBlockMember.bs"),dialogProps:{title:e,onClose:function(a){},participants:c,threadFbid:a},children:function(a,c){return j.jsx(b("CometMenuItem.react"),{primaryText:d,onClick:function(c){b("ODS").bumpEntityKey(3185,"mwchat_settings","block_member");return b("bs_curry")._1(a,void 0)},icon:f,ref:c,testid:"messenger_settings_block_menu"})}})}c=a;f.make=c}),null);
__d("MWChatSettingsBlockPage.bs",["fbt","ix","CometLazyDialogTrigger.react","CometMenuItem.react","JSResource","LsMessengerThreadDamagingActionsEntryPoint","LsMessengerThreadDamagingActionsSource","LsMessengerThreadDamagingActionsSourceOwner","MWChatCollapseTab.bs","MWThread_DEPRECATED.bs","MWUIBlock.bs","MWUIUnblock.bs","MessengerWebEntryPoint","ODS","bs_curry","fbicon","gkx","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){var c=a.isBlocked,d=b("MWThread_DEPRECATED.bs").useIdExn(void 0);a=b("MWThread_DEPRECATED.bs").useFBID(void 0);typeof d==="string"||d.NAME!=="Group"||b("unrecoverableViolation")("Can't block a group or local thread","messenger_comet");var e=b("MWChatCollapseTab.bs").useHook(b("MessengerWebEntryPoint").UNKNOWN),f=b("gkx")("1277703"),i=c?f?g._("Unblock"):g._("Turn on messages"):f?g._("Block"):g._("Turn off messages"),k=b("bs_curry")._2(b("MWUIBlock.bs").useHook,function(a){return b("bs_curry")._1(e,d)},function(a){}),l=b("bs_curry")._2(b("MWUIUnblock.bs").useHook,function(a){},function(a){});if(f)return j.jsx(b("CometLazyDialogTrigger.react"),{dialogResource:b("JSResource")("MWChatBlockPageActionDialog").__setRef("MWChatSettingsBlockPage.bs"),dialogProps:{onClose:function(a){},targetFBID:a,threadFBID:a,loggingData:{entryPoint:b("LsMessengerThreadDamagingActionsEntryPoint").THREAD_SETTINGS,source:b("LsMessengerThreadDamagingActionsSource").CANONICAL_THREAD,sourceOwner:b("LsMessengerThreadDamagingActionsSourceOwner").MBI}},children:function(a,c){return j.jsx(b("CometMenuItem.react"),{primaryText:i,onClick:function(c){b("ODS").bumpEntityKey(3185,"mwchat_settings","block");return b("bs_curry")._1(a,void 0)},icon:b("fbicon")._(h("482898"),20),ref:c,testid:"messenger_settings_block_menu"})}});else return j.jsx(b("CometMenuItem.react"),{primaryText:i,onClick:function(a){if(c)return b("bs_curry")._1(l,void 0);else return b("bs_curry")._1(k,void 0)},icon:b("fbicon")._(h("482898"),20)})}c=a;f.make=c}),null);
__d("MWChatSettingsBlockUser.bs",["fbt","ix","CometLazyDialogTrigger.react","CometMenuItem.react","JSResource","LsMessengerThreadDamagingActionsEntryPoint","LsMessengerThreadDamagingActionsSource","LsMessengerThreadDamagingActionsSourceOwner","ODS","bs_curry","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){var c=a.targetFbid,d=a.isBlocked,e=a.onClick,f=d?g._("Unblock"):g._("Block");return j.jsx(b("CometLazyDialogTrigger.react"),{dialogResource:b("JSResource")("MWChatBlockActionDialog").__setRef("MWChatSettingsBlockUser.bs"),dialogProps:{onClose:function(a){},targetFBID:c,threadFBID:c,loggingData:{entryPoint:b("LsMessengerThreadDamagingActionsEntryPoint").THREAD_SETTINGS,source:b("LsMessengerThreadDamagingActionsSource").CANONICAL_THREAD,sourceOwner:b("LsMessengerThreadDamagingActionsSourceOwner").MCI}},children:function(a,c){return j.jsx(b("CometMenuItem.react"),{primaryText:f,onClick:function(c){b("ODS").bumpEntityKey(3185,"mwchat_settings","block");b("bs_curry")._1(e,void 0);return b("bs_curry")._1(a,void 0)},icon:b("fbicon")._(h("482898"),20),ref:c,testid:"messenger_settings_block_menu"})}})}c=a;f.make=c}),null);
__d("MWChatSettingsChangeConversationName.bs",["fbt","ix","CometLazyDialogTrigger.react","CometMenuItem.react","JSResource","ODS","bs_curry","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){a=a.thread;return j.jsx(b("CometLazyDialogTrigger.react"),{dialogResource:b("JSResource")("LSThreadNameDialog.react").__setRef("MWChatSettingsChangeConversationName.bs"),dialogProps:{onClose:function(a){},thread:a},children:function(a,c){return j.jsx(b("CometMenuItem.react"),{primaryText:g._("Conversation name"),onClick:function(c){b("ODS").bumpEntityKey(3185,"mwchat_settings","thread_name");return b("bs_curry")._1(a,void 0)},icon:b("fbicon")._(h("477831"),20),ref:c,testid:"messenger_settings_thread_name_menu"})}})}c=a;f.make=c}),null);
__d("MWChatSettingsCreateGroup.bs",["fbt","ix","CometMenuItem.react","FBID.bs","LSBitOffset.bs","LSContactCapabilityBitOffset.bs","MNetContactItemType.bs","MWChatOpenNewTab.bs","MWChatSearchTypeaheadDataEntry","MWLSActor.bs","MWUIChatThreadHook.bs","MWUILoadParticipants.bs","MessagingThreadType.bs","MessengerWebEntryPoint","ReQL.bs","SkytaleDB","SkytaleDBHook.bs","SkytaleDBQuerySubscriptionHook.bs","SortedAsyncIterable.bs","bs_caml_array","bs_caml_format","bs_caml_int64","bs_caml_option","bs_curry","bs_int64","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function k(a){var c=b("SkytaleDBHook.bs").useHook(void 0),d=b("MWLSActor.bs").useActor(void 0),e=j.useMemo(function(){var c=Array.from(a.entries()).filter(function(a){return a[0]!==b("FBID.bs").ofStringExn(b("bs_int64").to_string(d))});if(c.length===1)return b("bs_caml_array").get(c,0)},[d,a]),f=b("SkytaleDBQuerySubscriptionHook.bs").useFirst(j.useMemo(function(){if(e!==void 0)return b("ReQL.bs").getKeyRange(b("SkytaleDB").table(c,"contacts").asc,{hd:b("bs_caml_format").caml_int64_of_string(e[0]),tl:0});else return b("SortedAsyncIterable.bs").empty(void 0)},[c,e])),g=j.useMemo(function(){if(f===void 0)return;var a=f.K,c=f.G;return{a:f.h,b:b("bs_int64").to_string(f.a),c:b("bs_caml_int64").zero,d:b("MNetContactItemType.bs").contact,e:b("MessagingThreadType.bs").oneToOne,f:f.h,g:f.b,h:void 0,i:a!==void 0?a:"",j:void 0,k:void 0,l:f.n,m:c!==void 0?b("LSBitOffset.bs").has(b("LSContactCapabilityBitOffset.bs").verified,c):void 0,n:void 0}},[f]);if(g!==void 0)return b("bs_caml_option").some(new(b("MWChatSearchTypeaheadDataEntry"))({displayName:g.f,id:b("FBID.bs").ofStringExn(g.b),isContact:!0,imageUrl:g.g,resultType:"user",secondaryImageUrl:"",subText:""},g))}function a(a){a=a.threadID;b("bs_curry")._1(b("MWUIChatThreadHook.bs").useThread,a);var c=b("MWChatOpenNewTab.bs").useHook(b("MessengerWebEntryPoint").UNKNOWN,"settingsCreateGroup");a=b("bs_curry")._1(b("MWUILoadParticipants.bs").useParticipants,a);var d=k(a);a=d===void 0;var e=j.useCallback(function(a){if(d!==void 0)return b("bs_curry")._1(c,b("bs_caml_option").some(b("bs_caml_option").valFromOption(d)))},[c,d]),f=b("fbicon")._(h("943402"),20);return j.jsx(b("CometMenuItem.react"),{primaryText:g._("Create group"),onClick:function(a){return b("bs_curry")._1(e,void 0)},icon:f,disabled:a,testid:"messenger_settings_create_group"})}c=a;f.useMWChatSearchTypeaheadDataEntryForOtherParticipant=k;f.make=c}),null);
__d("MWChatSettingsCustomizeEmoji.bs",["fbt","ix","CometLazyDialogTrigger.react","CometMenuItem.react","JSResource","ODS","bs_curry","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){return j.jsx(b("CometLazyDialogTrigger.react"),{dialogResource:b("JSResource")("MWChatCustomizeEmojiDialog").__setRef("MWChatSettingsCustomizeEmoji.bs"),dialogProps:{onClose:function(a){}},children:function(a,c){return j.jsx(b("CometMenuItem.react"),{primaryText:g._("Emoji"),onClick:function(c){b("ODS").bumpEntityKey(3185,"mwchat_settings","emoji");return b("bs_curry")._1(a,void 0)},icon:b("fbicon")._(h("642537"),20),ref:c,testid:"messenger_settings_emoji_menu"})}})}c=a;f.make=c}),null);
__d("MWChatSettingsCustomizeTheme.react",["fbt","ix","CometLazyDialogTrigger.react","CometMenuItem.react","JSResourceForInteraction","ODS","emptyFunction","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=i||b("react"),k=b("JSResourceForInteraction")("MWChatThreadThemes.react").__setRef("MWChatSettingsCustomizeTheme.react");function a(a){var c=a.disabled;return j.jsx(b("CometLazyDialogTrigger.react"),{dialogProps:{onClose:b("emptyFunction")},dialogResource:k,children:function(a){return j.jsx(b("CometMenuItem.react"),{disabled:c,icon:b("fbicon")._(h("787955"),20),onClick:function(c){b("ODS").bumpEntityKey(3185,"mwchat_settings","color"),a()},primaryText:g._("Color")})}})}}),null);
__d("MWChatSettingsEditNicknames.bs",["fbt","ix","CometLazyDialogTrigger.react","CometMenuItem.react","JSResource","ODS","bs_curry","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){a=a.thread;var c=g._("Nicknames"),d=b("fbicon")._(h("477831"),20);return j.jsx(b("CometLazyDialogTrigger.react"),{dialogResource:b("JSResource")("LSNicknameDialog.react").__setRef("MWChatSettingsEditNicknames.bs"),dialogProps:{thread:a,onClose:function(a){}},children:function(a,e){return j.jsx(b("CometMenuItem.react"),{primaryText:c,onClick:function(c){b("ODS").bumpEntityKey(3185,"mwchat_settings","nickname");return b("bs_curry")._1(a,void 0)},icon:d,ref:e,testid:"messenger_settings_nickname_menu"})}})}c=a;f.make=c}),null);
__d("MWChatSettingsIgnoreMessages.bs",["fbt","ix","CometLazyDialogTrigger.react","CometMenuItem.react","JSResource","ODS","bs_curry","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){var c=a.disabled;return j.jsx(b("CometLazyDialogTrigger.react"),{dialogResource:b("JSResource")("MWChatIgnoreMessagesDialogForJSResource.react").__setRef("MWChatSettingsIgnoreMessages.bs"),dialogProps:{onChange:function(a){}},children:function(a,d){return j.jsx(b("CometMenuItem.react"),{primaryText:g._("Ignore messages"),onClick:function(c){b("ODS").bumpEntityKey(3185,"mwchat_settings","ignore_thread");return b("bs_curry")._1(a,void 0)},icon:b("fbicon")._(h("578906"),20),ref:d,disabled:c,testid:"messenger_settings_ignore"})}})}c=a;f.make=c}),null);
__d("MWChatSettingsLeaveGroup.bs",["fbt","ix","CometLazyDialogTrigger.react","CometMenuItem.react","JSResource","ODS","bs_curry","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){var c=a.dispatch;a=a.isBlockedUserInGroup;var d=g._("Leave group"),e=b("fbicon")._(h("538183"),20);return j.jsx(b("CometLazyDialogTrigger.react"),{dialogResource:b("JSResource")("MWChatLeaveConversationDialogForJSResource.react").__setRef("MWChatSettingsLeaveGroup.bs"),dialogProps:{onClose:function(a){},onLeaveGroup:function(a){return c({NAME:"LeaveGroup",VAL:a})},isBlockedUserInGroup:a},children:function(a,c){return j.jsx(b("CometMenuItem.react"),{primaryText:d,onClick:function(c){b("ODS").bumpEntityKey(3185,"mwchat_settings","leave_thread");return b("bs_curry")._1(a,void 0)},icon:e,ref:c,testid:"messenger_settings_leave_menu"})}})}c=a;f.make=c}),null);
__d("MWChatSettingsMembers.bs",["fbt","ix","CometLazyDialogTrigger.react","CometMenuItem.react","JSResource","ODS","bs_curry","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){var c=g._("Members");return j.jsx(b("CometLazyDialogTrigger.react"),{dialogResource:b("JSResource")("LSGroupMembershipDialog.react").__setRef("MWChatSettingsMembers.bs"),dialogProps:{onClose:function(a){}},children:function(a,d){return j.jsx(b("CometMenuItem.react"),{primaryText:c,onClick:function(c){b("ODS").bumpEntityKey(3185,"mwchat_settings","members");return b("bs_curry")._1(a,void 0)},icon:b("fbicon")._(h("485103"),20),ref:d,testid:"messenger_settings_member_menu"})}})}c=a;f.make=c}),null);
__d("MWChatSettingsMute.bs",["ix","CometLazyDialogTrigger.react","CometMenuItem.react","JSResource","MWChatUpdateMuteSettingMutation","MWThread_DEPRECATED.bs","MessengerMuteUtils.bs","ODS","bs_curry","fbicon","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react");function a(a){var c=a.disabled;a=i.useContext(b("MWThread_DEPRECATED.bs").context);var d=a!==void 0&&typeof a!=="string"?a.NAME==="Page":!1,e=b("MessengerMuteUtils.bs").muteActionLabel(d,!1);if(a===void 0)return null;var f=a.VAL;return i.jsx(b("CometLazyDialogTrigger.react"),{dialogResource:b("JSResource")("MWChatMuteConversationDialogForJSResource.react").__setRef("MWChatSettingsMute.bs"),dialogProps:{title:e,onClose:function(a){},onUpdateMute:function(a){b("MWChatUpdateMuteSettingMutation").commit({thread_fbid:f,mute_duration:a})}},children:function(a,d){return i.jsx(b("CometMenuItem.react"),{primaryText:e,onClick:function(c){b("ODS").bumpEntityKey(3185,"mwchat_settings","mute");return b("bs_curry")._1(a,void 0)},icon:b("fbicon")._(g("532356"),20),ref:d,disabled:c,testid:"messenger_settings_mute_menu"})}})}c=a;f.make=c}),null);
__d("MessengerDesktopDeeplinkEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1856945");c=b("FalcoLoggerInternal").create("messenger_desktop_deeplink_event",a);e.exports=c}),null);
__d("XMessengerDotComDesktopLaunchAppInterstitialControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/desktop/launch/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("MWChatSettingsOpenInApp.bs",["fbt","ix","CometMenuItem.react","MWThread_DEPRECATED.bs","MessengerDesktopDeeplinkEventFalcoEvent","XMessengerDotComDesktopLaunchAppInterstitialControllerRouteBuilder","fbicon","react","uuid"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){a=j.useContext(b("MWThread_DEPRECATED.bs").context);var c=b("uuid")(),d=j.useRef(!1);j.useEffect(function(){d.current||(d.current=!0,b("MessengerDesktopDeeplinkEventFalcoEvent").log(function(a){return{event:"chat_settings_open_in_app_impression",eventLocation:"browser",eventType:"thread",funnelSessionId:c,mobile_app_source:"unknown"}}))},[]);var e=function(a){b("MessengerDesktopDeeplinkEventFalcoEvent").log(function(a){return{event:"chat_settings_open_in_app_click",eventLocation:"browser",eventType:"thread",funnelSessionId:c,mobile_app_source:"unknown"}})};if(a!==void 0)return j.jsx(b("CometMenuItem.react"),{primaryText:g._("Open in App"),href:b("XMessengerDotComDesktopLaunchAppInterstitialControllerRouteBuilder").buildUri({funnel_session_id:c,thread:a.VAL,origin:"FB"}).setDomain("www.messenger.com").setProtocol("https").toString(),onClick:e,icon:b("fbicon")._(h("505620"),20),testid:"messenger_settings_open_in_app"});else return null}c=a;f.make=c}),null);
__d("MWChatSettingsOpenInbox.bs",["fbt","ix","CometMenuItem.react","MWThread_DEPRECATED.bs","ODS","XCometMessengerControllerRouteBuilder","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){a=j.useContext(b("MWThread_DEPRECATED.bs").context);if(a!==void 0)return j.jsx(b("CometMenuItem.react"),{primaryText:g._("Open in Messenger"),href:b("XCometMessengerControllerRouteBuilder").buildURL({thread_key:a.VAL}),onClick:function(a){b("ODS").bumpEntityKey(3185,"mwchat_settings","open_messenger")},icon:b("fbicon")._(h("505620"),20),testid:"messenger_settings_open_inbox"});else return null}c=a;f.make=c}),null);
__d("MWChatSettingsOpenMD.bs",["fbt","ix","CometMenuItem.react","MessengerDesktopPromoEventLogger","UserAgent","XMessengerDotComDesktopControllerRouteBuilder","fbicon","gkx","react","uuid"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){var c=j.useRef(!1),d=b("uuid")();j.useEffect(function(){b("gkx")("1749834")&&!c.current&&(c.current=!0,b("MessengerDesktopPromoEventLogger").log({location:"MessengerCometSettingsMenu",event:"Impression",funnelSessionId:d}))},[]);a=function(a){b("MessengerDesktopPromoEventLogger").log({location:"MessengerCometSettingsMenu",event:"Click",funnelSessionId:d})};var e=b("XMessengerDotComDesktopControllerRouteBuilder").buildUri({funnel_session_id:d}).setDomain("www.messenger.com").setProtocol("https").setFragment("startDownload").toString();if(b("gkx")("1749834"))if(b("UserAgent").isPlatform("Mac OS X"))return j.jsx(b("CometMenuItem.react"),{primaryText:g._("New! Messenger App for Mac"),href:e,onClick:a,icon:b("fbicon")._(h("607958"),20),testid:"messenger_settings_macapp"});else if(b("UserAgent").isPlatform("Windows"))return j.jsx(b("CometMenuItem.react"),{primaryText:g._("New! Messenger App for Windows"),href:e,onClick:a,icon:b("fbicon")._(h("607958"),20),testid:"messenger_settings_windowsapp"});else return null;else return null}c=a;f.make=c}),null);
__d("MWChatSettingsOpenPage.bs",["fbt","ix","CometMenuItem.react","ODS","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){a=a.href;return j.jsx(b("CometMenuItem.react"),{primaryText:g._("View page"),href:a,onClick:function(a){b("ODS").bumpEntityKey(3185,"mwchat_settings","open_page")},icon:b("fbicon")._(h("487663"),20)})}c=a;f.make=c}),null);
__d("MWChatSettingsReportConversation.bs",["fbt","ix","CometLazyDialogTrigger.react","CometMenuItem.react","FRXEntryPoint","JSResource","NFXStoryLocation","ODS","bs_caml_option","bs_curry","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){var c=a.id,d=a.reportingToken,e=a.onClick;if(typeof c==="string")a=void 0;else{c=c.NAME;a=c==="Group"?{entryPoint:b("FRXEntryPoint").REPORT_BUTTON,id:d,location:b("NFXStoryLocation").MESSENGER_GROUP_THREAD_DETAILS}:c==="Page"?{entryPoint:b("FRXEntryPoint").REPORT_BUTTON,id:d,location:b("NFXStoryLocation").MESSENGER_P2B_DIRECT_THREAD_DETAILS}:c==="User"?{entryPoint:b("FRXEntryPoint").REPORT_BUTTON,id:d,location:b("NFXStoryLocation").MESSENGER_DIRECT_THREAD_DETAILS}:void 0}var f=g._("Something's wrong"),i=g._("Give feedback and report the conversation");if(a!==void 0)return j.jsx(b("CometLazyDialogTrigger.react"),{dialogResource:b("JSResource")("CometFRX_DEPRECATED.react").__setRef("MWChatSettingsReportConversation.bs"),dialogProps:b("bs_caml_option").valFromOption(a),children:function(a,c){return j.jsx(b("CometMenuItem.react"),{primaryText:f,onClick:function(c){b("ODS").bumpEntityKey(3185,"mwchat_settings","feedback");b("bs_curry")._1(e,void 0);return b("bs_curry")._1(a,void 0)},secondaryText:i,icon:b("fbicon")._(h("555452"),20),ref:c,testid:"messenger_settings_feedback_menu"})}});else return null}c=a;f.make=c}),null);
__d("MWChatSettingsUnmute.bs",["ix","CometMenuItem.react","MWChatUpdateMuteSettingMutation","MWThread_DEPRECATED.bs","MWUIThreadMuteExpireTimeMs.bs","MessengerMuteUtils.bs","bs_caml_option","bs_curry","fbicon","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react");function a(a){a=i.useContext(b("MWThread_DEPRECATED.bs").context);var c=b("bs_curry")._1(b("MWUIThreadMuteExpireTimeMs.bs").useHook,void 0),d=a!==void 0&&typeof a!=="string"?a.NAME==="Page":!1;d=b("MessengerMuteUtils.bs").muteActionLabel(d,!0);c=b("MessengerMuteUtils.bs").mutedUntilLabel(c/1e3);if(a===void 0)return null;var e=a.VAL;a={primaryText:d,onClick:function(a){b("MWChatUpdateMuteSettingMutation").commit({thread_fbid:e,mute_duration:0})},icon:b("fbicon")._(g("652791"),20)};c!==void 0&&(a.secondaryText=b("bs_caml_option").valFromOption(c));return i.jsx(b("CometMenuItem.react"),a)}c=a;f.make=c}),null);
__d("MWChatSettingsViewProfile.bs",["fbt","ix","CometMenuItem.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");function a(a){a=a.href;return j.jsx(b("CometMenuItem.react"),{primaryText:g._("View Profile"),href:a,icon:b("fbicon")._(h("558623"),20)})}c=a;f.make=c}),null);
__d("MWChatHeaderSettings.bs",["CometMenu.react","CometMenuSeparator.react","LsSystemFolder.bs","MWChatCloseTab.bs","MWChatSettingsAddPeople.bs","MWChatSettingsBlockMember.bs","MWChatSettingsBlockPage.bs","MWChatSettingsBlockUser.bs","MWChatSettingsChangeConversationName.bs","MWChatSettingsCreateGroup.bs","MWChatSettingsCustomizeEmoji.bs","MWChatSettingsCustomizeTheme.react","MWChatSettingsDeleteConversation.bs","MWChatSettingsEditNicknames.bs","MWChatSettingsIgnoreMessages.bs","MWChatSettingsLeaveGroup.bs","MWChatSettingsMembers.bs","MWChatSettingsMute.bs","MWChatSettingsOpenInApp.bs","MWChatSettingsOpenInbox.bs","MWChatSettingsOpenMD.bs","MWChatSettingsOpenPage.bs","MWChatSettingsReportConversation.bs","MWChatSettingsUnmute.bs","MWChatSettingsViewProfile.bs","MWLSDeleteThread.bs","MWThreadKey.bs","MWUIThreadCapabilities.bs","MessengerWebEntryPoint","MessengerWebEvent","MessengerWebStgTypedLoggerLite.bs","ODS","ReQL.bs","SkytaleDB","SkytaleDBHook.bs","SkytaleDBQuerySubscriptionHook.bs","bs_belt_Option","bs_caml_int64","bs_curry","gkx","qex","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a){var c=a.id,d=a.isMuted,e=a.isBlocked,f=a.dispatch,g=a.isViewerInGroup,i=a.isBlockedUserInGroup,j=a.isGroup,k=a.participants,l=a.reportingToken,m=a.isEmptyThread,n=a.disableCustomization,o=a.openPageURL;a=a.canonicalThreadProfileLink;g=g!==void 0?g:!1;i=i!==void 0?i:!1;j=j!==void 0?j:!1;n=n!==void 0?n:!1;h.useEffect(function(){var d;if(typeof c==="string")d=null;else{var a=c.NAME;d=a==="User"||a==="Page"?c.VAL:null}b("MessengerWebStgTypedLoggerLite.bs").log({event_name:b("MessengerWebEvent").OPEN_THREAD_SETTINGS_MENU,other_user_fbid:d,thread_fbid:typeof c==="string"||c.NAME!=="Group"?null:c.VAL})},[c]);var p=b("bs_curry")._1(b("MWUIThreadCapabilities.bs").useCapabilities,void 0),q=b("bs_curry")._1(b("MWUIThreadCapabilities.bs").canCustomizeTheme,p),r=b("bs_curry")._1(b("MWUIThreadCapabilities.bs").canCustomizeEmoji,p),s=b("bs_curry")._1(b("MWUIThreadCapabilities.bs").canCustomizeNicknames,p);p=b("bs_curry")._1(b("MWUIThreadCapabilities.bs").canCreateGroup,p);var t=b("gkx")("1846003"),u=b("SkytaleDBHook.bs").useHook(void 0),v=b("MWThreadKey.bs").useIdMemoizedExn(void 0),w=b("SkytaleDBQuerySubscriptionHook.bs").useFirst(h.useMemo(function(){return b("ReQL.bs").getKeyRange(b("SkytaleDB").table(u,"threads").asc,{hd:v,tl:0})},[u,v])),x=w!==void 0?b("bs_caml_int64").neq(w.A,b("LsSystemFolder.bs").other):!1,y=b("MWLSDeleteThread.bs").useDeleteThread(void 0),z=b("MWChatCloseTab.bs").useHook(b("MessengerWebEntryPoint").UNKNOWN),A=function(a){b("ODS").bumpEntityKey(3185,"mwchat_settings","delete_conv");b("bs_curry")._1(y,c);return b("bs_curry")._1(z,c)},B=b("qex")._("1987550")===!0,C=b("gkx")("1837053");if(n||b("bs_belt_Option").getWithDefault(e,!0)||typeof c==="string")n=null;else{var D=c.NAME;n=D==="User"||D==="Group"?h.jsxs(h.Fragment,{children:[q||r||s||j?h.jsx(b("CometMenuSeparator.react"),{}):null,q&&!m?h.jsx(b("MWChatSettingsCustomizeTheme.react"),{}):null,r&&!m?h.jsx(b("MWChatSettingsCustomizeEmoji.bs").make,{}):null,s&&!m&&t?h.jsx(b("MWChatSettingsEditNicknames.bs").make,{thread:w}):null,j&&b("gkx")("1841593")?h.jsx(b("MWChatSettingsChangeConversationName.bs").make,{thread:w}):null]}):null}if(x&&typeof c!=="string"){D=c.NAME;q=D==="User"||D==="Group"?h.jsx(b("MWChatSettingsIgnoreMessages.bs").make,{disabled:m}):null}else q=null;if(typeof c==="string")r=null;else{s=c.NAME;r=s==="Page"?e!==void 0?h.jsx(b("MWChatSettingsBlockPage.bs").make,{isBlocked:e}):null:s==="User"&&e!==void 0?h.jsx(b("MWChatSettingsBlockUser.bs").make,{targetFbid:c.VAL,isBlocked:e,onClick:function(a){}}):null}return h.jsxs(b("CometMenu.react"),{autoFocus:!0,children:[B&&C?h.jsx(b("MWChatSettingsOpenInApp.bs").make,{}):h.jsx(b("MWChatSettingsOpenInbox.bs").make,{}),h.jsx(b("MWChatSettingsOpenMD.bs").make,{}),b("bs_belt_Option").mapWithDefault(a,null,function(a){return h.jsx(b("MWChatSettingsViewProfile.bs").make,{href:a})}),n,g?h.jsxs(h.Fragment,{children:[h.jsx(b("CometMenuSeparator.react"),{}),h.jsx(b("MWChatSettingsMembers.bs").make,{}),b("gkx")("1480724")?h.jsx(b("MWChatSettingsAddPeople.bs").make,{dispatch:f}):null,h.jsx(b("MWChatSettingsLeaveGroup.bs").make,{dispatch:f,isBlockedUserInGroup:i})]}):null,o!==void 0?h.jsxs(h.Fragment,{children:[h.jsx(b("CometMenuSeparator.react"),{}),h.jsx(b("MWChatSettingsOpenPage.bs").make,{href:o})]}):null,typeof c==="string"||!(c.NAME==="User"&&p)?null:h.jsxs(h.Fragment,{children:[h.jsx(b("CometMenuSeparator.react"),{}),h.jsx(b("MWChatSettingsCreateGroup.bs").make,{threadID:c})]}),h.jsx(b("CometMenuSeparator.react"),{}),b("bs_belt_Option").getWithDefault(e,!0)?null:d?h.jsx(b("MWChatSettingsUnmute.bs").make,{}):h.jsx(b("MWChatSettingsMute.bs").make,{disabled:m}),q,r,typeof c==="string"||!(c.NAME==="Group"&&g)?null:h.jsx(b("MWChatSettingsBlockMember.bs").make,{participants:k,threadFbid:c.VAL}),h.jsx(b("CometMenuSeparator.react"),{}),h.jsx(b("MWChatSettingsDeleteConversation.bs").make,{disabled:m,onClick:A}),l!==void 0?h.jsx(b("MWChatSettingsReportConversation.bs").make,{id:c,reportingToken:l,onClick:function(a){}}):null],withArrow:!0})}c=a;f.make=c}),null);
__d("MWChatHeaderSettings.react",["MWChatHeaderSettings.bs"],(function(a,b,c,d,e,f){"use strict";a=b("MWChatHeaderSettings.bs").make;e.exports=a}),null);