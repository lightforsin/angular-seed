System.register(["angular2/core", "../../components/favorite/favorite.component", "../../components/voter/voter.component", "../../components/tweets/tweets.component", "../../pipes/summary.pipe", "../../components/bs-panel/bs-panel.component", "../../components/zippy/zippy.component"], function (exports_1, context_1) {
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
    var core_1, favorite_component_1, voter_component_1, tweets_component_1, summary_pipe_1, bs_panel_component_1, zippy_component_1, AppComponent;
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
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (bs_panel_component_1_1) {
                bs_panel_component_1 = bs_panel_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                    this.viewMode = 'list';
                    this.isCollaped = true;
                    this.title = "The title";
                    this.courses = [{
                            title: 'Info',
                            rating: 4.9765,
                            students: 1456,
                            price: 99.95,
                            startDate: new Date(2017, 1, 15),
                            description: 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. '
                        },
                        {
                            title: 'Mate',
                            rating: 3.7626,
                            students: 9723,
                            price: 63.75,
                            startDate: new Date(2017, 1, 20),
                            description: 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. '
                        }];
                    this.post = {
                        isFavorite: true
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
                    template: "\n        <zippy title=\"Home\">\n            The home page\n        </zippy>\n        <zippy title=\"About us\">\n            This is what we are:...\n        </zippy>\n\n        <div *ngIf=\"courses.length > 0\">\n            <div *ngFor=\"#course of courses, #i = index\" \n            style=\"border: solid 1px red; padding: 10px\">\n                {{ i + 1 }} - {{ course.title | uppercase}}<br/>\n                Rating: {{ course.rating | number:'2.2-2'}} <br />\n                Students: {{ course.students | number }} <br />\n                Price: {{ course.price | currency:'EUR' }} <br />\n                Date: {{ course.startDate | date }} <br />\n                Description: {{ course.description | summary:30 }}\n            </div>\n        </div>\n        <div *ngIf=\"courses.length == 0\">You don't have any courses!</div>\n\n        <bs-panel>\n            <div class=\"heading\">My heading</div>\n            <div class=\"body\">My body</div>\n        </bs-panel>\n\n        <h2>Twitter</h2> <br />\n        <tweets></tweets>\n    ",
                    pipes: [summary_pipe_1.SummaryPipe],
                    directives: [favorite_component_1.FavoriteComponent, voter_component_1.VoterComponent,
                        tweets_component_1.TweetsComponent, bs_panel_component_1.BootstrapPanel, zippy_component_1.ZippyComponent]
                }),
                __metadata("design:paramtypes", [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map