System.register(["angular2/core", "../../components/favorite/favorite.component", "../../components/voter/voter.component", "../../components/tweets/tweets.component"], function (exports_1, context_1) {
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
    var core_1, favorite_component_1, voter_component_1, tweets_component_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        isFavorite: true,
                    };
                    this.vote = {
                        voteCount: 10,
                        myVote: 0
                    };
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "\n        <i class=\"glyphicon glyphicon-star\"></i>\n        <favorite \n            [isFavorite]=\"post.isFavorite\"\n            (change)=\"onFavoriteChange($event)\">\n        </favorite><br /><br/>\n        \n        <voter \n            [voteCount]=\"vote.voteCount\"\n            [myVote]=\"vote.myVote\"\n            (vote)=\"onVote($event)\">\n        </voter><br /><br/>\n\n        <h2>Twitter</h2> <br />\n        <tweets></tweets>\n    ",
                    directives: [favorite_component_1.FavoriteComponent, voter_component_1.VoterComponent, tweets_component_1.TweetsComponent]
                }),
                __metadata("design:paramtypes", [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map