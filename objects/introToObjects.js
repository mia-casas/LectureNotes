let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log("All Data:", netflix);
console.log("Just season info:", netflix.season1.seasonInfo);
console.log("Specific episode name:", netflix.season1.seasonInfo.episodeInfo[3].episodeName);


console.log("Episode:", netflix.season1.seasonInfo.episodeInfo[1].episode);

console.log("Episode name:", netflix.season1.seasonInfo.episodeInfo[2].episodeName);

/*
- JSON stands for JavaScript Object Notation
- The JSON is derived from JavaScript Object Notation syntax, but that JSON format is text only
- JSON exists as a string, which is useful when you want to 

*/
