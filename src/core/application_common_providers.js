'use strict';var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var application_tokens_1 = require('./application_tokens');
var change_detection_1 = require('./change_detection/change_detection');
var resolved_metadata_cache_1 = require('angular2/src/core/linker/resolved_metadata_cache');
var view_manager_1 = require('./linker/view_manager');
var view_manager_2 = require("./linker/view_manager");
var view_resolver_1 = require('./linker/view_resolver');
var view_listener_1 = require('./linker/view_listener');
var directive_resolver_1 = require('./linker/directive_resolver');
var pipe_resolver_1 = require('./linker/pipe_resolver');
var compiler_1 = require('./linker/compiler');
var compiler_2 = require("./linker/compiler");
var dynamic_component_loader_1 = require('./linker/dynamic_component_loader');
var dynamic_component_loader_2 = require("./linker/dynamic_component_loader");
/**
 * A default set of providers which should be included in any Angular
 * application, regardless of the platform it runs onto.
 */
exports.APPLICATION_COMMON_PROVIDERS = lang_1.CONST_EXPR([
    new di_1.Provider(compiler_1.Compiler, { useClass: compiler_2.Compiler_ }),
    application_tokens_1.APP_ID_RANDOM_PROVIDER,
    resolved_metadata_cache_1.ResolvedMetadataCache,
    new di_1.Provider(view_manager_1.AppViewManager, { useClass: view_manager_2.AppViewManager_ }),
    view_listener_1.AppViewListener,
    view_listener_1.ViewFactoryProxy,
    view_resolver_1.ViewResolver,
    new di_1.Provider(change_detection_1.IterableDiffers, { useValue: change_detection_1.defaultIterableDiffers }),
    new di_1.Provider(change_detection_1.KeyValueDiffers, { useValue: change_detection_1.defaultKeyValueDiffers }),
    directive_resolver_1.DirectiveResolver,
    pipe_resolver_1.PipeResolver,
    new di_1.Provider(dynamic_component_loader_1.DynamicComponentLoader, { useClass: dynamic_component_loader_2.DynamicComponentLoader_ })
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fY29tbW9uX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb3JlL2FwcGxpY2F0aW9uX2NvbW1vbl9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQStCLDBCQUEwQixDQUFDLENBQUE7QUFDMUQsbUJBQXVELHNCQUFzQixDQUFDLENBQUE7QUFDOUUsbUNBSU8sc0JBQXNCLENBQUMsQ0FBQTtBQUM5QixpQ0FLTyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzdDLHdDQUFvQyxrREFBa0QsQ0FBQyxDQUFBO0FBQ3ZGLDZCQUE2Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3JELDZCQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELDhCQUFnRCx3QkFBd0IsQ0FBQyxDQUFBO0FBQ3pFLG1DQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlELDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELHlCQUF1QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzNDLHlCQUF3QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzVDLHlDQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3pFLHlDQUFzQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBRTFFOzs7R0FHRztBQUNVLG9DQUE0QixHQUFtQyxpQkFBVSxDQUFDO0lBQ3JGLElBQUksYUFBUSxDQUFDLG1CQUFRLEVBQUUsRUFBQyxRQUFRLEVBQUUsb0JBQVMsRUFBQyxDQUFDO0lBQzdDLDJDQUFzQjtJQUN0QiwrQ0FBcUI7SUFDckIsSUFBSSxhQUFRLENBQUMsNkJBQWMsRUFBRSxFQUFDLFFBQVEsRUFBRSw4QkFBZSxFQUFDLENBQUM7SUFDekQsK0JBQWU7SUFDZixnQ0FBZ0I7SUFDaEIsNEJBQVk7SUFDWixJQUFJLGFBQVEsQ0FBQyxrQ0FBZSxFQUFFLEVBQUMsUUFBUSxFQUFFLHlDQUFzQixFQUFDLENBQUM7SUFDakUsSUFBSSxhQUFRLENBQUMsa0NBQWUsRUFBRSxFQUFDLFFBQVEsRUFBRSx5Q0FBc0IsRUFBQyxDQUFDO0lBQ2pFLHNDQUFpQjtJQUNqQiw0QkFBWTtJQUNaLElBQUksYUFBUSxDQUFDLGlEQUFzQixFQUFFLEVBQUMsUUFBUSxFQUFFLGtEQUF1QixFQUFDLENBQUM7Q0FDMUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlLCBDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtwcm92aWRlLCBQcm92aWRlciwgSW5qZWN0b3IsIE9wYXF1ZVRva2VufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge1xuICBBUFBfQ09NUE9ORU5UX1JFRl9QUk9NSVNFLFxuICBBUFBfQ09NUE9ORU5ULFxuICBBUFBfSURfUkFORE9NX1BST1ZJREVSXG59IGZyb20gJy4vYXBwbGljYXRpb25fdG9rZW5zJztcbmltcG9ydCB7XG4gIEl0ZXJhYmxlRGlmZmVycyxcbiAgZGVmYXVsdEl0ZXJhYmxlRGlmZmVycyxcbiAgS2V5VmFsdWVEaWZmZXJzLFxuICBkZWZhdWx0S2V5VmFsdWVEaWZmZXJzXG59IGZyb20gJy4vY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJztcbmltcG9ydCB7UmVzb2x2ZWRNZXRhZGF0YUNhY2hlfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvcmVzb2x2ZWRfbWV0YWRhdGFfY2FjaGUnO1xuaW1wb3J0IHtBcHBWaWV3TWFuYWdlcn0gZnJvbSAnLi9saW5rZXIvdmlld19tYW5hZ2VyJztcbmltcG9ydCB7QXBwVmlld01hbmFnZXJffSBmcm9tIFwiLi9saW5rZXIvdmlld19tYW5hZ2VyXCI7XG5pbXBvcnQge1ZpZXdSZXNvbHZlcn0gZnJvbSAnLi9saW5rZXIvdmlld19yZXNvbHZlcic7XG5pbXBvcnQge0FwcFZpZXdMaXN0ZW5lciwgVmlld0ZhY3RvcnlQcm94eX0gZnJvbSAnLi9saW5rZXIvdmlld19saXN0ZW5lcic7XG5pbXBvcnQge0RpcmVjdGl2ZVJlc29sdmVyfSBmcm9tICcuL2xpbmtlci9kaXJlY3RpdmVfcmVzb2x2ZXInO1xuaW1wb3J0IHtQaXBlUmVzb2x2ZXJ9IGZyb20gJy4vbGlua2VyL3BpcGVfcmVzb2x2ZXInO1xuaW1wb3J0IHtDb21waWxlcn0gZnJvbSAnLi9saW5rZXIvY29tcGlsZXInO1xuaW1wb3J0IHtDb21waWxlcl99IGZyb20gXCIuL2xpbmtlci9jb21waWxlclwiO1xuaW1wb3J0IHtEeW5hbWljQ29tcG9uZW50TG9hZGVyfSBmcm9tICcuL2xpbmtlci9keW5hbWljX2NvbXBvbmVudF9sb2FkZXInO1xuaW1wb3J0IHtEeW5hbWljQ29tcG9uZW50TG9hZGVyX30gZnJvbSBcIi4vbGlua2VyL2R5bmFtaWNfY29tcG9uZW50X2xvYWRlclwiO1xuXG4vKipcbiAqIEEgZGVmYXVsdCBzZXQgb2YgcHJvdmlkZXJzIHdoaWNoIHNob3VsZCBiZSBpbmNsdWRlZCBpbiBhbnkgQW5ndWxhclxuICogYXBwbGljYXRpb24sIHJlZ2FyZGxlc3Mgb2YgdGhlIHBsYXRmb3JtIGl0IHJ1bnMgb250by5cbiAqL1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0NPTU1PTl9QUk9WSURFUlM6IEFycmF5PFR5cGUgfCBQcm92aWRlciB8IGFueVtdPiA9IENPTlNUX0VYUFIoW1xuICBuZXcgUHJvdmlkZXIoQ29tcGlsZXIsIHt1c2VDbGFzczogQ29tcGlsZXJffSksXG4gIEFQUF9JRF9SQU5ET01fUFJPVklERVIsXG4gIFJlc29sdmVkTWV0YWRhdGFDYWNoZSxcbiAgbmV3IFByb3ZpZGVyKEFwcFZpZXdNYW5hZ2VyLCB7dXNlQ2xhc3M6IEFwcFZpZXdNYW5hZ2VyX30pLFxuICBBcHBWaWV3TGlzdGVuZXIsXG4gIFZpZXdGYWN0b3J5UHJveHksXG4gIFZpZXdSZXNvbHZlcixcbiAgbmV3IFByb3ZpZGVyKEl0ZXJhYmxlRGlmZmVycywge3VzZVZhbHVlOiBkZWZhdWx0SXRlcmFibGVEaWZmZXJzfSksXG4gIG5ldyBQcm92aWRlcihLZXlWYWx1ZURpZmZlcnMsIHt1c2VWYWx1ZTogZGVmYXVsdEtleVZhbHVlRGlmZmVyc30pLFxuICBEaXJlY3RpdmVSZXNvbHZlcixcbiAgUGlwZVJlc29sdmVyLFxuICBuZXcgUHJvdmlkZXIoRHluYW1pY0NvbXBvbmVudExvYWRlciwge3VzZUNsYXNzOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyX30pXG5dKTsiXX0=