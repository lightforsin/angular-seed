System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, FavoriteComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            FavoriteComponent = (function () {
                function FavoriteComponent() {
                    this.change = new core_1.EventEmitter();
                }
                FavoriteComponent.prototype.toggleState = function () {
                    this.isFavorite = !this.isFavorite;
                    this.change.emit({ newValue: this.isFavorite });
                };
                return FavoriteComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Boolean)
            ], FavoriteComponent.prototype, "isFavorite", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], FavoriteComponent.prototype, "change", void 0);
            FavoriteComponent = __decorate([
                core_1.Component({
                    selector: 'favorite',
                    templateUrl: 'app/components/favorite/favorite.template.html',
                    styles: ["\n        .glyphicon-star {\n            color: orange;\n        }\n    "]
                }),
                __metadata("design:paramtypes", [])
            ], FavoriteComponent);
            exports_1("FavoriteComponent", FavoriteComponent);
        }
    };
});
//# sourceMappingURL=favorite.component.js.map