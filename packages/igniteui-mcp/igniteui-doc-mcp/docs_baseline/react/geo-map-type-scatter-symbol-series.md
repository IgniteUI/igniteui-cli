---
title: React Map | Data Visualization Tools | Scatter Symbol Series | Data Binding | Infragistics
_description: Use Infragistics React map's scatter symbol series to display geo-spatial data using points or markers in a geographic context.. Learn more about Ignite UI for React map's series!
_keywords: React map, scatter symbol series, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap", "ShapefileConverter", "Series"]
_tocName: Geographic Symbol Map
_premium: true
---

# React Geographic Symbol Map

In React map component, you can use the [`IgrGeographicSymbolSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html) to display geo-spatial data using points or markers in a geographic context. This type of geographic series is often used to render a collection of geographic locations such as cities, airports, earthquakes, or points of interests.

## React Geographic Symbol Map Example

```typescript
export default class WorldLocations {

    public static locations: any[] = [];
    public static capitals: any[] = [];
    public static cities: any[] = [];

    // get location of cities and capitals
    public static getAll(): any[] {
        if (this.locations.length === 0) this.init();
        return this.locations;
    }

    // get location of cities
    public static getCities(): any[] {
        if (this.cities.length === 0) this.init();
        return this.cities;
    }

    // get location of capitals
    public static getCapitals(): any[] {
        if (this.capitals.length === 0) this.init();
        return this.capitals;
    }

    public static init(): any[] {
        this.locations = [
            { cap: false, pop:  0.468, lat: 68.9635467529297, lon: 33.0860404968262, country: "Russia", name: "Murmansk" },
            { cap: false, pop:  0.416, lat: 64.5206680297852, lon: 40.6461601257324, country: "Russia", name: "Arkhangelsk" },
            { cap: false, pop:  5.825, lat: 59.9518890380859, lon: 30.4533271789551, country: "Russia", name: "Saint Petersburg" },
            { cap: false, pop:  0.152, lat: 59.5709991455078, lon: 150.780014038086, country: "Russia", name: "Magadan" },
            { cap: false, pop:  1.160, lat: 58.0002365112305, lon: 56.2324638366699, country: "Russia", name: "Perm'" },
            { cap: false, pop:  1.620, lat: 56.8465423583984, lon: 60.6101303100586, country: "Russia", name: "Yekaterinburg" },
            { cap: false, pop:  2.025, lat: 56.2896766662598, lon: 43.9406700134277, country: "Russia", name: "Nizhniy Novgorod" },
            { cap: false, pop:  1.800, lat: 55.8628082275391, lon: -4.26994752883911, country: "UK", name: "Glasgow" },
            { cap: false, pop:  1.140, lat: 55.7330055236816, lon: 49.1454658508301, country: "Russia", name: "Kazan'" },
            { cap: false, pop:  1.325, lat: 55.1450004577637, lon: 61.3926124572754, country: "Russia", name: "Chelyabinsk" },
            { cap: false, pop:  1.175, lat: 55.063304901123, lon: 73.2502899169922, country: "Russia", name: "Omsk" },
            { cap: false, pop:  1.600, lat: 55.0321006774902, lon: 82.9428482055664, country: "Russia", name: "Novosibirsk" },
            { cap: false, pop:  1.100, lat: 54.8217353820801, lon: 56.0961265563965, country: "Russia", name: "Ufa" },
            { cap: true,  pop:  0.582, lat: 54.6885681152344, lon: 25.2759666442871, country: "Lithuania", name: "Vilnius" },
            { cap: false, pop:  0.685, lat: 54.5869255065918, lon: -5.90966033935547, country: "UK", name: "Belfast" },
            { cap: false, pop:  0.909, lat: 54.3662033081055, lon: 18.624942779541, country: "Poland", name: "Gdansk" },
            { cap: true,  pop:  1.650, lat: 53.8999366760254, lon: 27.5755672454834, country: "Belarus", name: "Minsk" },
            { cap: false, pop:  1.540, lat: 53.8087120056152, lon: -1.49752748012543, country: "UK", name: "Leeds" },
            { cap: false, pop:  2.225, lat: 53.5711212158203, lon: 10.027606010437, country: "Germany", name: "Hamburg" },
            { cap: false, pop:  2.775, lat: 53.479663848877, lon: -2.26177859306335, country: "UK", name: "Manchester" },
            { cap: false, pop:  0.710, lat: 53.3740425109863, lon: -1.46298921108246, country: "UK", name: "Sheffield" },
            { cap: true,  pop:  1.140, lat: 53.3415603637695, lon: -6.25734663009644, country: "Ireland", name: "Dublin" },
            { cap: false, pop:  1.505, lat: 53.1385955810547, lon: 50.0961799621582, country: "Russia", name: "Samara" },
            { cap: false, pop:  0.800, lat: 53.0801048278809, lon: 8.85762596130371, country: "Germany", name: "Bremen" },
            { cap: true,  pop:  5.061, lat: 52.5162734985352, lon: 13.3275728225708, country: "Germany", name: "Berlin" },
            { cap: false, pop:  2.675, lat: 52.4927520751953, lon: -1.86334776878357, country: "UK", name: "Birmingham" },
            { cap: true,  pop:  1.860, lat: 52.3730430603027, lon: 4.89483308792114, country: "Netherlands", name: "Amsterdam" },
            { cap: false, pop:  0.626, lat: 52.3174324035645, lon: 104.247833251953, country: "Russia", name: "Irkutsk" },
            { cap: true,  pop:  2.323, lat: 52.244945526123, lon: 21.0118789672852, country: "Poland", name: "Warsaw" },
            { cap: false, pop:  1.110, lat: 51.925594329834, lon: 4.48515224456787, country: "Netherlands", name: "Rotterdam" },
            { cap: false, pop:  1.061, lat: 51.7779083251953, lon: 19.4764404296875, country: "Poland", name: "Lodz" },
            { cap: false, pop:  0.568, lat: 51.5138130187988, lon: 7.46641826629639, country: "Germany", name: "Dortmund" },
            { cap: false, pop:  0.515, lat: 51.4893379211426, lon: 6.77530431747437, country: "Germany", name: "Duisburg" },
            { cap: true,  pop: 11.100, lat: 51.4879112243652, lon: -0.177998125553131, country: "UK", name: "london" },
            { cap: false, pop:  3.867, lat: 51.3540420532227, lon: 7.12243509292603, country: "Germany", name: "Essen" },
            { cap: false, pop:  0.700, lat: 51.3493309020996, lon: 12.3980741500854, country: "Germany", name: "Leipzig" },
            { cap: false, pop:  1.100, lat: 51.207347869873, lon: 4.42605447769165, country: "Belgium", name: "Antwerpen" },
            { cap: false, pop:  0.640, lat: 51.1218185424805, lon: 17.0381278991699, country: "Poland", name: "Wroclaw" },
            { cap: false, pop:  0.465, lat: 51.0475540161133, lon: 3.73629117012024, country: "Belgium", name: "Gent" },
            { cap: false, pop:  0.670, lat: 51.0456809997559, lon: 13.7053575515747, country: "Germany", name: "Dresden" },
            { cap: false, pop:  0.671, lat: 51.0299987792969, lon: -114.050003051758, country: "Canada", name: "Calgary" },
            { cap: false, pop:  1.760, lat: 50.9423446655273, lon: 6.93487167358398, country: "Germany", name: "Koln" },
            { cap: true,  pop:  2.385, lat: 50.8370475769043, lon: 4.36761236190796, country: "Belgium", name: "Bruxelles" },
            { cap: false, pop:  0.570, lat: 50.7345581054688, lon: 7.09981870651245, country: "Germany", name: "Bonn" },
            { cap: false, pop:  1.020, lat: 50.6320838928223, lon: 3.06290125846863, country: "France", name: "Lille" },
            { cap: false, pop:  0.750, lat: 50.6225280761719, lon: 5.56943559646606, country: "Belgium", name: "Liege" },
            { cap: true,  pop:  2.900, lat: 50.4481582641602, lon: 30.5021114349365, country: "Ukraine", name: "Kiev" },
            { cap: false, pop:  1.855, lat: 50.129997253418, lon: 8.66816711425781, country: "Germany", name: "Frankfurt am Main" },
            { cap: true,  pop:  1.325, lat: 50.1058959960938, lon: 14.4565200805664, country: "Czechia", name: "Prague" },
            { cap: false, pop:  0.828, lat: 50.0622406005859, lon: 19.9450569152832, country: "Poland", name: "Krakow" },
            { cap: false, pop:  0.625, lat: 49.9211692810059, lon: -97.1244430541992, country: "Canada", name: "Winnipeg" },
            { cap: false, pop:  0.614, lat: 49.879207611084, lon: 73.20263671875, country: "Kazakhstan", name: "Karaganda" },
            { cap: false, pop:  0.790, lat: 49.8373107910156, lon: 24.0345211029053, country: "Ukraine", name: "Lvov" },
            { cap: false, pop:  0.450, lat: 49.2029800415039, lon: 16.6162452697754, country: "Czechia", name: "Brno" },
            { cap: true,  pop:  9.775, lat: 48.8815536499023, lon: 2.43283271789551, country: "France", name: "Paris" },
            { cap: false, pop:  1.360, lat: 48.7102470397949, lon: 44.4836311340332, country: "Russia", name: "Volgograd" },
            { cap: false, pop:  0.400, lat: 48.5834350585938, lon: 7.76799440383911, country: "France", name: "Strasbourg" },
            { cap: false, pop:  0.335, lat: 48.2975959777832, lon: 14.2939014434814, country: "Austria", name: "Linz" },
            { cap: true,  pop:  1.875, lat: 48.2021179199219, lon: 16.3209857940674, country: "Austria", name: "Vienna" },
            { cap: false, pop:  1.955, lat: 48.1409759521484, lon: 11.5429534912109, country: "Germany", name: "Munchen" },
            { cap: false, pop:  2.200, lat: 48.0401458740234, lon: 37.7370529174805, country: "Ukraine", name: "Donets'k" },
            { cap: true,  pop:  0.548, lat: 47.928596496582, lon: 106.912353515625, country: "Mongolia", name: "Ulaanbaatar" },
            { cap: true,  pop:  2.565, lat: 47.5146255493164, lon: 19.0942497253418, country: "Hungary", name: "Budapest" },
            { cap: false, pop:  1.150, lat: 47.3440055847168, lon: 123.964965820313, country: "China", name: "Qiqihar" },
            { cap: false, pop:  0.185, lat: 47.2654609680176, lon: 11.3499822616577, country: "Austria", name: "Innsbruck" },
            { cap: false, pop:  1.165, lat: 47.2320976257324, lon: 39.6880378723145, country: "Russia", name: "Rostov-na-Donu" },
            { cap: false, pop:  0.465, lat: 47.2194328308105, lon: -1.56156122684479, country: "France", name: "Nantes" },
            { cap: false, pop:  0.325, lat: 47.0649223327637, lon: 15.4311008453369, country: "Austria", name: "Graz" },
            { cap: true,  pop:  0.299, lat: 46.9482078552246, lon: 7.44573640823364, country: "Switzerland", name: "Bern" },
            { cap: false, pop:  0.603, lat: 46.802074432373, lon: -71.2449340820313, country: "Canada", name: "Quebec" },
            { cap: false, pop:  1.185, lat: 46.5722007751465, lon: 30.6839370727539, country: "Ukraine", name: "Odessa" },
            { cap: false, pop:  2.670, lat: 45.7552185058594, lon: 126.622634887695, country: "China", name: "Harbin" },
            { cap: false, pop:  1.275, lat: 45.7470817565918, lon: 4.85540056228638, country: "France", name: "Lyon" },
            { cap: false, pop:  2.921, lat: 45.541015625, lon: -73.6535339355469, country: "Canada", name: "Montreal" },
            { cap: false, pop:  3.750, lat: 45.4733810424805, lon: 9.19046401977539, country: "Italy", name: "Milano" },
            { cap: false, pop:  0.420, lat: 45.4247741699219, lon: 12.370719909668, country: "Italy", name: "Venezia" },
            { cap: true,  pop:  0.819, lat: 45.3742179870605, lon: -75.650749206543, country: "Canada", name: "Ottawa" },
            { cap: false, pop:  1.550, lat: 45.0748748779297, lon: 7.66642618179321, country: "Italy", name: "Torino" },
            { cap: false, pop:  2.012, lat: 44.924186706543, lon: -93.3077926635742, country: "US", name: "Minneapolis" },
            { cap: false, pop:  0.640, lat: 44.8414726257324, lon: -0.599498748779297, country: "France", name: "Bordeaux" },
            { cap: true,  pop:  1.400, lat: 44.7996826171875, lon: 20.4125556945801, country: "Serbia", name: "Beograd" },
            { cap: true,  pop:  2.250, lat: 44.4304847717285, lon: 26.1229763031006, country: "Romania", name: "Bucuresti" },
            { cap: false, pop:  1.740, lat: 43.8813171386719, lon: 125.312652587891, country: "China", name: "Changchung" },
            { cap: false, pop:  1.170, lat: 43.8502159118652, lon: 126.56706237793, country: "China", name: "Jilin" },
            { cap: false, pop:  1.040, lat: 43.7826652526855, lon: 87.5865173339844, country: "China", name: "Urumqi" },
            { cap: false, pop:  0.640, lat: 43.7815742492676, lon: 11.207745552063, country: "Italy", name: "Firenze" },
            { cap: false, pop:  3.427, lat: 43.7207679748535, lon: -79.4126358032227, country: "Canada", name: "Toronto" },
            { cap: false, pop:  0.541, lat: 43.5999603271484, lon: 1.43798303604126, country: "France", name: "Toulouse" },
            { cap: false, pop:  0.985, lat: 43.2821578979492, lon: -2.97378325462341, country: "Spain", name: "Bilbao" },
            { cap: true,  pop:  1.190, lat: 43.2550621032715, lon: 76.9126281738281, country: "Kazakhstan", name: "Almaty" },
            { cap: false, pop:  0.816, lat: 43.2104644775391, lon: -77.635612487793, country: "US", name: "Rochester" },
            { cap: false, pop:  1.375, lat: 43.0679473876953, lon: -87.9907379150391, country: "US", name: "Milwaukee" },
            { cap: false, pop:  1.900, lat: 43.0552520751953, lon: 141.345474243164, country: "Japan", name: "Sapporo" },
            { cap: false, pop:  1.483, lat: 42.8986625671387, lon: -78.8484344482422, country: "US", name: "Buffalo" },
            { cap: true,  pop:  1.205, lat: 42.7072639465332, lon: 23.3318710327148, country: "Bulgaria", name: "Sofia" },
            { cap: false, pop:  4.692, lat: 42.3943138122559, lon: -83.0789260864258, country: "US", name: "Detroit" },
            { cap: false, pop:  3.972, lat: 42.3752975463867, lon: -71.1025848388672, country: "US", name: "Boston" },
            { cap: false, pop:  1.270, lat: 41.8591575622559, lon: 123.905570983887, country: "China", name: "Fushun" },
            { cap: false, pop:  7.717, lat: 41.826545715332, lon: -87.6413040161133, country: "US", name: "Chicago" },
            { cap: false, pop:  3.840, lat: 41.8021621704102, lon: 123.383056640625, country: "China", name: "Shenyang" },
            { cap: true,  pop:  1.460, lat: 41.721809387207, lon: 44.7831268310547, country: "Georgia", name: "Tbilisi" },
            { cap: false, pop:  0.575, lat: 41.6512641906738, lon: -0.878205060958862, country: "Spain", name: "Zaragoza" },
            { cap: false, pop:  2.218, lat: 41.3907165527344, lon: -81.7275085449219, country: "US", name: "Cleveland" },
            { cap: true,  pop:  0.211, lat: 41.3316535949707, lon: 19.8318042755127, country: "Albania", name: "Tirane" },
            { cap: false, pop:  1.300, lat: 41.1152458190918, lon: 122.977012634277, country: "China", name: "Anshan" },
            { cap: false, pop:  5.750, lat: 41.0659561157227, lon: 29.0060691833496, country: "Turkey", name: "Istanbul" },
            { cap: false, pop:  0.682, lat: 40.693920135498, lon: -111.89217376709, country: "US", name: "Salt Lake City" },
            { cap: false, pop:  2.219, lat: 40.4972038269043, lon: -79.9970855712891, country: "US", name: "Pittsburgh" },
            { cap: true,  pop:  4.650, lat: 40.4422187805176, lon: -3.69096946716309, country: "Spain", name: "Madrid" },
            { cap: true,  pop:  2.020, lat: 40.3242988586426, lon: 49.8162384033203, country: "Azerbaijan", name: "Baku" },
            { cap: true,  pop:  1.315, lat: 40.2080230712891, lon: 44.5326690673828, country: "Armenia", name: "Yerevan" },
            { cap: false, pop:  0.964, lat: 40.0446434020996, lon: -82.9927062988281, country: "US", name: "Columbus" },
            { cap: true,  pop:  2.400, lat: 39.929328918457, lon: 32.853271484375, country: "Turkey", name: "Ankara" },
            { cap: false, pop:  5.209, lat: 39.9275512695313, lon: -75.2182235717773, country: "US", name: "Philadelphia" },
            { cap: true,  pop:  6.450, lat: 39.906192779541, lon: 116.388038635254, country: "China", name: "Beijing" },
            { cap: false, pop:  0.246, lat: 39.9044532775879, lon: 41.2918243408203, country: "Turkey", name: "Erzurum" },
            { cap: false, pop:  0.366, lat: 39.6575813293457, lon: 66.9476013183594, country: "Uzbekistan", name: "Samarkand" },
            { cap: false, pop:  1.060, lat: 39.6154441833496, lon: 118.180213928223, country: "China", name: "Tangshan" },
            { cap: false, pop:  1.270, lat: 39.4709167480469, lon: -0.367400944232941, country: "Spain", name: "Valencia" },
            { cap: false, pop:  1.960, lat: 39.3218841552734, lon: -76.6183776855469, country: "US", name: "Baltimore" },
            { cap: false, pop:  0.305, lat: 39.2251434326172, lon: 9.10890960693359, country: "Italy", name: "Cagliari" },
            { cap: false, pop:  1.480, lat: 39.1480102539063, lon: -84.4770202636719, country: "US", name: "Cincinnati" },
            { cap: false, pop:  4.880, lat: 39.1284141540527, lon: 117.18522644043, country: "China", name: "Tianjin" },
            { cap: true,  pop:  1.600, lat: 39.0285148620605, lon: 125.757514953613, country: "Korea D P Rp", name: "Pyongyang" },
            { cap: false, pop:  1.272, lat: 38.9941177368164, lon: -94.6265640258789, country: "US", name: "Kansas City" },
            { cap: true,  pop:  3.221, lat: 38.8909111022949, lon: -76.9538345336914, country: "US", name: "Washington D.C." },
            { cap: false, pop:  2.203, lat: 38.6388854980469, lon: -90.3419799804688, country: "US", name: "St. Louis" },
            { cap: false, pop:  0.866, lat: 38.5670166015625, lon: -121.422706604004, country: "US", name: "Sacramento" },
            { cap: false, pop:  0.971, lat: 38.0809783935547, lon: 46.2901191711426, country: "Iran", name: "Tabriz" },
            { cap: false, pop:  1.190, lat: 38.0770950317383, lon: 114.559707641602, country: "China", name: "Shijiazhuang" },
            { cap: true,  pop:  0.398, lat: 37.9504203796387, lon: 58.3901329040527, country: "Turkmenistan", name: "Ashkhabad" },
            { cap: false, pop:  1.660, lat: 37.8930549621582, lon: 112.551704406738, country: "China", name: "Taiyuan" },
            { cap: true,  pop: 15.850, lat: 37.542350769043, lon: 126.935249328613, country: "South-Korea", name: "Seoul" },
            { cap: false, pop:  0.945, lat: 37.3726463317871, lon: -5.97083187103271, country: "Spain", name: "Sevilla" },
            { cap: false, pop:  0.778, lat: 36.9999809265137, lon: 35.3243637084961, country: "Turkey", name: "Adana" },
            { cap: false, pop:  0.796, lat: 36.8792915344238, lon: -76.2685699462891, country: "US", name: "Norfolk" },
            { cap: true,  pop:  1.225, lat: 36.8188133239746, lon: 10.1659603118896, country: "Tunisia", name: "Tunis" },
            { cap: false, pop:  0.830, lat: 36.7914962768555, lon: 118.062042236328, country: "China", name: "Zibo" },
            { cap: false, pop:  1.460, lat: 36.6555366516113, lon: 116.967056274414, country: "China", name: "Jinan" },
            { cap: false, pop:  0.571, lat: 36.3355674743652, lon: 43.1371269226074, country: "Iraq", name: "Mosul" },
            { cap: false, pop:  1.464, lat: 36.2900695800781, lon: 59.596851348877, country: "Iran", name: "Mashhad" },
            { cap: false, pop:  1.216, lat: 36.2155456542969, lon: 37.1592826843262, country: "Syria", name: "Aleppo" },
            { cap: false, pop:  1.270, lat: 36.1134300231934, lon: 103.599594116211, country: "China", name: "Lanzhou" },
            { cap: false, pop:  2.206, lat: 35.8635368347168, lon: 128.591384887695, country: "South-Korea", name: "Taegu" },
            { cap: true,  pop:  6.400, lat: 35.7744750976563, lon: 51.4476509094238, country: "Iran", name: "Tehran" },
            { cap: true,  pop: 23.620, lat: 35.6830558776855, lon: 139.809188842773, country: "Japan", name: "Tokyo" },
            { cap: false, pop:  1.089, lat: 35.5045700073242, lon: 139.72721862793, country: "Japan", name: "Kawasaki" },
            { cap: false, pop:  0.742, lat: 35.4895896911621, lon: -97.5302963256836, country: "US", name: "Oklahoma City" },
            { cap: false, pop:  2.993, lat: 35.437385559082, lon: 139.619659423828, country: "Japan", name: "Yokohama" },
            { cap: false, pop:  0.479, lat: 35.2058143615723, lon: -80.8356857299805, country: "US", name: "Charlotte" },
            { cap: false, pop:  3.800, lat: 35.1578674316406, lon: 129.0546875, country: "South-Korea", name: "Pusan" },
            { cap: false, pop:  4.800, lat: 35.1549224853516, lon: 136.920593261719, country: "Japan", name: "Nagoya" },
            { cap: false, pop:  0.853, lat: 35.1147270202637, lon: -90.0003280639648, country: "US", name: "Memphis" },
            { cap: false, pop:  1.479, lat: 35.0091285705566, lon: 135.754821777344, country: "Japan", name: "Kyoto" },
            { cap: false, pop:  1.170, lat: 34.757682800293, lon: 113.641777038574, country: "China", name: "Zhengzhou" },
            { cap: false, pop:  0.431, lat: 34.7338752746582, lon: 36.7181739807129, country: "Syria", name: "Homs" },
            { cap: false, pop:  0.740, lat: 34.6713485717773, lon: 112.361236572266, country: "China", name: "Luoyang" },
            { cap: false, pop: 15.040, lat: 34.6355285644531, lon: 135.519119262695, country: "Japan", name: "Osaka" },
            { cap: true,  pop:  1.179, lat: 34.5309066772461, lon: 69.1367568969727, country: "Afghanistan", name: "Kabul" },
            { cap: false, pop:  1.575, lat: 34.377555847168, lon: 132.444778442383, country: "Japan", name: "Hiroshima" },
            { cap: false, pop:  2.050, lat: 34.265697479248, lon: 108.883361816406, country: "China", name: "Xian" },
            { cap: false, pop:  0.535, lat: 34.0435676574707, lon: -4.99554777145386, country: "Morocco", name: "Fes" },
            { cap: false, pop:  1.963, lat: 33.7957000732422, lon: -84.3492279052734, country: "US", name: "Atlanta" },
            { cap: true,  pop:  0.204, lat: 33.7181510925293, lon: 73.060546875, country: "Pakistan", name: "Islamabad" },
            { cap: false, pop:  0.836, lat: 33.6058044433594, lon: 73.0437469482422, country: "Pakistan", name: "Rawalpindi" },
            { cap: true,  pop:  1.850, lat: 33.5193023681641, lon: 36.3134536743164, country: "Syria", name: "Damascus" },
            { cap: false, pop:  1.482, lat: 33.5090217590332, lon: -112.110260009766, country: "US", name: "Phoenix" },
            { cap: true,  pop:  3.841, lat: 33.3340377807617, lon: 44.397834777832, country: "Iraq", name: "Baghdad" },
            { cap: false, pop:  2.727, lat: 32.763729095459, lon: -96.663688659668, country: "US", name: "Dallas" },
            { cap: false, pop:  0.987, lat: 32.6513900756836, lon: 51.6791877746582, country: "Iran", name: "Esfahan" },
            { cap: false, pop:  2.290, lat: 32.0483665466309, lon: 118.768905639648, country: "China", name: "Nanjing" },
            { cap: true,  pop:  1.250, lat: 31.9493827819824, lon: 35.9329071044922, country: "Jordan", name: "Amman" },
            { cap: false, pop:  0.595, lat: 31.6308898925781, lon: 74.8715515136719, country: "India", name: "Amritsar" },
            { cap: false, pop:  3.025, lat: 31.5450534820557, lon: 74.3406753540039, country: "Pakistan", name: "Lahore" },
            { cap: false, pop:  1.104, lat: 31.4089508056641, lon: 73.0834579467773, country: "Pakistan", name: "Faisalabad" },
            { cap: false, pop:  9.300, lat: 31.2478694915771, lon: 121.47265625, country: "China", name: "Shanghai" },
            { cap: false, pop:  1.810, lat: 30.6700687408447, lon: 104.071273803711, country: "China", name: "Chengdu" },
            { cap: false, pop:  3.490, lat: 30.5724983215332, lon: 114.279220581055, country: "China", name: "Wuhan" },
            { cap: false, pop:  0.617, lat: 30.503490447998, lon: 47.7608642578125, country: "Iraq", name: "Al Basra" },
            { cap: false, pop:  1.270, lat: 30.2526245117188, lon: 120.165077209473, country: "China", name: "Hangzhou" },
            { cap: true,  pop:  9.300, lat: 30.0779113769531, lon: 31.2507972717285, country: "Egypt", name: "Cairo" },
            { cap: false, pop:  1.185, lat: 29.9563789367676, lon: -90.0986862182617, country: "US", name: "New Orleans" },
            { cap: false, pop:  2.755, lat: 29.7718296051025, lon: -95.407112121582, country: "US", name: "Houston" },
            { cap: false, pop:  0.084, lat: 29.6507034301758, lon: 91.1320877075195, country: "China", name: "Lhasa" },
            { cap: false, pop:  2.450, lat: 29.5441036224365, lon: 106.522689819336, country: "China", name: "Chongqing" },
            { cap: false, pop:  0.968, lat: 29.4299221038818, lon: -98.5245742797852, country: "US", name: "San Antonio" },
            { cap: false, pop:  1.030, lat: 28.6712398529053, lon: 115.88941192627, country: "China", name: "Nanchang" },
            { cap: true,  pop:  0.273, lat: 28.5687255859375, lon: 77.2167510986328, country: "India", name: "New Delhi" },
            { cap: false, pop:  7.200, lat: 28.5264587402344, lon: 77.2243728637695, country: "India", name: "Delhi" },
            { cap: false, pop:  1.190, lat: 28.1976413726807, lon: 112.968482971191, country: "China", name: "Changsha" },
            { cap: true,  pop:  0.320, lat: 27.7120170593262, lon: 85.3129501342773, country: "Nepal", name: "Kathmandu" },
            { cap: true,  pop:  0.012, lat: 27.44260597229, lon: 89.6673278808594, country: "Bhutan", name: "Thimbu" },
            { cap: false, pop:  1.025, lat: 26.9051132202148, lon: 75.8012771606445, country: "India", name: "Jaipur" },
            { cap: false, pop:  1.060, lat: 26.8494281768799, lon: 80.9197235107422, country: "India", name: "Lucknow" },
            { cap: false, pop:  1.010, lat: 26.5719413757324, lon: 106.700302124023, country: "China", name: "Guiyang" },
            { cap: false, pop:  1.875, lat: 26.4578304290771, lon: 80.3178634643555, country: "India", name: "Kanpur" },
            { cap: false, pop:  0.890, lat: 26.0710163116455, lon: 119.303520202637, country: "China", name: "Fuzhou" },
            { cap: false, pop:  2.827, lat: 25.8321304321289, lon: -80.2702178955078, country: "US", name: "Miami" },
            { cap: false, pop:  2.015, lat: 25.6773529052734, lon: -100.317085266113, country: "Mexico", name: "Monterrey" },
            { cap: false, pop:  1.025, lat: 25.6138973236084, lon: 85.1353454589844, country: "India", name: "Patna" },
            { cap: false, pop:  0.800, lat: 25.3801860809326, lon: 68.3664703369141, country: "Pakistan", name: "Hyderabad" },
            { cap: false, pop:  0.925, lat: 25.2820110321045, lon: 82.9563369750977, country: "India", name: "Benares" },
            { cap: true,  pop:  0.310, lat: 25.2036418914795, lon: 51.4972343444824, country: "Qatar", name: "Doha" },
            { cap: false, pop:  1.280, lat: 25.0510330200195, lon: 102.702125549316, country: "China", name: "Kunming" },
            { cap: true,  pop:  6.130, lat: 25.0350914001465, lon: 121.506729125977, country: "Taiwan", name: "Taipei" },
            { cap: false, pop:  0.715, lat: 24.1436424255371, lon: 120.670280456543, country: "Taiwan", name: "T`ai-chung" },
            { cap: true,  pop:  3.430, lat: 23.7099189758301, lon: 90.4071426391602, country: "Bangladesh", name: "Dhaka" },
            { cap: false, pop:  3.050, lat: 23.0961952209473, lon: 113.293609619141, country: "China", name: "Guangzhou" },
            { cap: false, pop:  2.400, lat: 23.0397911071777, lon: 72.5668640136719, country: "India", name: "Ahmadabad" },
            { cap: false, pop:  0.648, lat: 22.8426475524902, lon: 89.5582427978516, country: "Bangladesh", name: "Khulna" },
            { cap: false, pop: 11.100, lat: 22.5435371398926, lon: 88.3342208862305, country: "India", name: "Calcutta" },
            { cap: false, pop:  0.435, lat: 22.2432346343994, lon: -97.8426284790039, country: "Mexico", name: "Tampico" },
            { cap: false, pop:  0.533, lat: 21.975944519043, lon: 96.0841522216797, country: "Burma", name: "Mandalay" },
            { cap: false, pop:  0.550, lat: 21.4273815155029, lon: 39.8148384094238, country: "Saudi Arabia", name: "Mecca" },
            { cap: false, pop:  1.302, lat: 21.1557579040527, lon: 79.089111328125, country: "India", name: "Nagpur" },
            { cap: true,  pop:  1.500, lat: 21.0319480895996, lon: 105.81990814209, country: "Vietnam", name: "Hanoi" },
            { cap: false, pop:  0.385, lat: 20.8613586425781, lon: 106.679794311523, country: "Vietnam", name: "Haiphong" },
            { cap: false, pop:  0.400, lat: 20.8218688964844, lon: -89.552864074707, country: "Mexico", name: "Merida" },
            { cap: false, pop:  2.325, lat: 20.6735916137695, lon: -103.343795776367, country: "Mexico", name: "Guadalajara" },
            { cap: false, pop:  0.207, lat: 19.6157131195068, lon: 37.2196884155273, country: "Sudan", name: "Bur Sudan" },
            { cap: true,  pop: 14.100, lat: 19.4270458221436, lon: -99.127571105957, country: "Mexico", name: "Mexico City" },
            { cap: false, pop:  1.055, lat: 19.0486316680908, lon: -98.1929473876953, country: "Mexico", name: "Puebla de Zaragoza" },
            { cap: false, pop:  1.775, lat: 18.5357475280762, lon: 73.8522720336914, country: "India", name: "Pune" },
            { cap: true,  pop:  0.880, lat: 18.5266170501709, lon: -72.3431091308594, country: "Haiti", name: "Port-au-Prince" },
            { cap: true,  pop:  1.775, lat: 18.4006156921387, lon: -66.0817565917969, country: "Puerto Rico", name: "San Juan" },
            { cap: true,  pop:  0.770, lat: 18.0157127380371, lon: -76.7973022460938, country: "Jamaica", name: "Kingston" },
            { cap: false, pop:  2.750, lat: 17.3945465087891, lon: 78.4850311279297, country: "India", name: "Hyderabad" },
            { cap: true,  pop:  2.800, lat: 16.8722229003906, lon: 96.1248931884766, country: "Burma", name: "Rangoon" },
            { cap: true,  pop:  0.427, lat: 15.3614444732666, lon: 44.2095031738281, country: "Yemen", name: "Sanaa" },
            { cap: true,  pop:  1.400, lat: 14.6180076599121, lon: -90.52490234375, country: "Guatemala", name: "Guatemala" },
            { cap: true,  pop:  0.552, lat: 14.0990505218506, lon: -87.2030944824219, country: "Honduras", name: "Tegucigalpa" },
            { cap: true,  pop:  6.450, lat: 13.7455711364746, lon: 100.552665710449, country: "Thailand", name: "Bangkok" },
            { cap: true,  pop:  0.920, lat: 13.7014122009277, lon: -89.2002334594727, country: "El Salvador", name: "San Salvador" },
            { cap: true,  pop:  0.398, lat: 13.6045436859131, lon: 2.08344984054565, country: "Niger", name: "Niamey" },
            { cap: false, pop:  4.475, lat: 13.0615034103394, lon: 80.2478256225586, country: "India", name: "Madras" },
            { cap: false, pop:  2.950, lat: 12.9747505187988, lon: 77.5877304077148, country: "India", name: "Bangalore" },
            { cap: true,  pop:  0.646, lat: 12.6529502868652, lon: -7.98648166656494, country: "Mali", name: "Bamako" },
            { cap: true,  pop:  0.682, lat: 12.1514730453491, lon: -86.2730331420898, country: "Nicaragua", name: "Managua" },
            { cap: true,  pop:  0.700, lat: 11.564736366272, lon: 104.913192749023, country: "Cambodia", name: "Phnom Penh" },
            { cap: false, pop:  3.100, lat: 10.7591819763184, lon: 106.662452697754, country: "Vietnam", name: "Ho Chi Minh City" },
            { cap: false, pop:  0.891, lat: 10.6450433731079, lon: -71.6371459960938, country: "Venezuela", name: "Maracaibo" },
            { cap: true,  pop:  3.600, lat: 10.4960489273071, lon: -66.8982849121094, country: "Venezuela", name: "Caracas" },
            { cap: false, pop:  0.498, lat: 10.0656652450562, lon: -69.3391952514648, country: "Venezuela", name: "Barquisimeto" },
            { cap: true,  pop:  0.670, lat: 9.93047618865967, lon: -84.07861328125, country: "Costa Rica", name: "San Jose" },
            { cap: false, pop:  0.960, lat: 9.91398620605469, lon: 78.1217269897461, country: "India", name: "Madurai" },
            { cap: false, pop:  1.144, lat: 7.37884044647217, lon: 3.8952784538269, country: "Nigeria", name: "Ibadan" },
            { cap: false, pop:  0.409, lat: 7.08008003234863, lon: 125.613677978516, country: "Philippines", name: "Davao" },
            { cap: false, pop:  0.253, lat: 6.45053863525391, lon: 7.4920802116394, country: "Nigeria", name: "Enugu" },
            { cap: false, pop:  2.095, lat: 6.24114656448364, lon: -75.5920333862305, country: "Colombia", name: "Medellin" },
            { cap: true,  pop:  1.250, lat: 5.55856275558472, lon: -0.200923636555672, country: "Ghana", name: "Accra" },
            { cap: true,  pop:  1.950, lat: 5.32485723495483, lon: -4.02188682556152, country: "Ivory Coast", name: "Abidjan" },
            { cap: true,  pop:  4.260, lat: 4.63021993637085, lon: -74.0805130004883, country: "Colombia", name: "Bogota" },
            { cap: true,  pop:  0.474, lat: 4.3658561706543, lon: 18.5623416900635, country: "Cent Af Rep", name: "Bangui" },
            { cap: true,  pop:  0.654, lat: 3.86512303352356, lon: 11.5136413574219, country: "Cameroon", name: "Yaounde" },
            { cap: false, pop:  1.374, lat: 3.58524203300476, lon: 98.6755981445313, country: "Indonesia", name: "Medan" },
            { cap: false, pop:  1.400, lat: 3.45685529708862, lon: -76.5224380493164, country: "Colombia", name: "Cali" },
            { cap: true,  pop:  1.475, lat: 3.1502103805542, lon: 101.707672119141, country: "Malaysia", name: "Kuala Lumpur" },
            { cap: true,  pop:  0.600, lat: 2.04117751121521, lon: 45.3441429138184, country: "Somalia", name: "Muqdisho" },
            { cap: false, pop:  0.283, lat: 0.519284904003143, lon: 25.1961479187012, country: "Zaire", name: "Kisangani" },
            { cap: true,  pop:  1.050, lat: -0.229498133063316, lon: -78.524284362793, country: "Ecuador", name: "Quito" },
            { cap: false, pop:  0.179, lat: -3.75289535522461, lon: -73.1914901733398, country: "Peru", name: "Iquitos" },
            { cap: false, pop:  1.825, lat: -3.78332185745239, lon: -38.5889015197754, country: "Brazil", name: "Fortaleza" },
            { cap: true,  pop:  0.586, lat: -4.28518676757813, lon: 15.2851486206055, country: "Congo", name: "Brazzaville" },
            { cap: false, pop:  0.291, lat: -5.89221096038818, lon: 22.4027786254883, country: "Zaire", name: "Kananga" },
            { cap: true,  pop:  1.300, lat: -6.81735897064209, lon: 39.2533493041992, country: "Tanzania", name: "Dar es Salaam" },
            { cap: false, pop:  1.800, lat: -6.91243028640747, lon: 107.606903076172, country: "Indonesia", name: "Bandung" },
            { cap: false, pop:  2.625, lat: -8.08516788482666, lon: -34.9146385192871, country: "Brazil", name: "Recife" },
            { cap: false, pop:  0.155, lat: -12.7177352905273, lon: 13.464879989624, country: "Angola", name: "Benguela" },
            { cap: true,  pop:  1.568, lat: -15.7921094894409, lon: -47.8977470397949, country: "Brazil", name: "Brasilia" },
            { cap: false, pop:  0.447, lat: -16.3975391387939, lon: -71.5227432250977, country: "Peru", name: "Arequipa" },
            { cap: true,  pop:  0.993, lat: -16.4990062713623, lon: -68.1462478637695, country: "Bolivia", name: "La Paz" },
            { cap: false, pop:  0.990, lat: -16.7266998291016, lon: -49.254810333252, country: "Brazil", name: "Goiania" },
            { cap: false, pop:  0.442, lat: -17.7887916564941, lon: -63.1974182128906, country: "Bolivia", name: "Santa Cruz de La Sierra" },
            { cap: false, pop:  0.087, lat: -19.0421352386475, lon: -65.2558822631836, country: "Bolivia", name: "Sucre" },
            { cap: false, pop:  2.950, lat: -19.8517208099365, lon: -43.9090690612793, country: "Brazil", name: "Belo Horizonte" },
            { cap: false, pop: 10.150, lat: -22.7215728759766, lon: -43.4551773071289, country: "Brazil", name: "Rio de Janeiro" },
            { cap: false, pop: 15.175, lat: -23.5813045501709, lon: -46.6228981018066, country: "Brazil", name: "Sao Paulo" },
            { cap: false, pop:  1.065, lat: -23.9547004699707, lon: -46.3094940185547, country: "Brazil", name: "Santos" },
            { cap: true,  pop:  0.095, lat: -24.6614418029785, lon: 25.7948017120361, country: "Botswana", name: "Gaborone" },
            { cap: false, pop:  1.700, lat: -25.4304790496826, lon: -49.2845077514648, country: "Brazil", name: "Curitiba" },
            { cap: true,  pop:  0.960, lat: -25.7313461303711, lon: 28.2183723449707, country: "South Africa", name: "Pretoria" },
            { cap: true,  pop:  1.070, lat: -25.9621543884277, lon: 32.5736923217773, country: "Mozambique", name: "Maputo" },
            { cap: false, pop:  3.650, lat: -26.1789569854736, lon: 28.0043087005615, country: "South Africa", name: "Johannesburg" },
            { cap: false, pop:  1.149, lat: -27.4539127349854, lon: 153.026489257813, country: "Australia", name: "Brisbane" },
            { cap: false, pop:  1.550, lat: -29.8363723754883, lon: 30.9421882629395, country: "South Africa", name: "Durban" },
            { cap: false, pop:  2.600, lat: -30.0395336151123, lon: -51.2079887390137, country: "Brazil", name: "Porto Alegre" },
            { cap: false, pop:  1.070, lat: -31.3162784576416, lon: -64.1798553466797, country: "Argentina", name: "Cordoba" },
            { cap: false, pop:  0.292, lat: -31.6168975830078, lon: -60.6978416442871, country: "Argentina", name: "Santa Fe" },
            { cap: false, pop:  0.650, lat: -32.8974380493164, lon: -68.8297348022461, country: "Argentina", name: "Mendoza" },
            { cap: false, pop:  1.045, lat: -32.9377365112305, lon: -60.6639404296875, country: "Argentina", name: "Rosario" },
            { cap: true,  pop:  4.100, lat: -33.475025177002, lon: -70.6475143432617, country: "Chile", name: "Santiago" },
            { cap: false, pop:  0.690, lat: -33.8815765380859, lon: 25.4842987060547, country: "South Africa", name: "Port Elizabeth" },
            { cap: false, pop:  3.365, lat: -33.8897743225098, lon: 151.028198242188, country: "Australia", name: "Sydney" },
            { cap: true,  pop: 10.750, lat: -34.6654014587402, lon: -58.4095916748047, country: "Argentina", name: "Buenos Aires" },
            { cap: true,  pop:  0.271, lat: -35.349925994873, lon: 149.041625976563, country: "Australia", name: "Canberra" },
            { cap: false, pop:  0.850, lat: -36.893253326416, lon: 174.801055908203, country: "New Zealand", name: "Auckland" },
            { cap: false, pop:  2.833, lat: -37.8529586791992, lon: 145.075103759766, country: "Australia", name: "Melbourne" },
            { cap: false, pop:  0.224, lat: -38.7252731323242, lon: -62.2740669250488, country: "Argentina", name: "Bahia Blanca" },
            { cap: false, pop:  0.320, lat: -43.5489158630371, lon: 172.683654785156, country: "New Zealand", name: "Christchurch" },
            { cap: true,  pop:  0.900, lat: 60.1964225769043, lon: 24.9766998291016, country: "Finland", name: "Helsinki" },
            { cap: false, pop:  0.310, lat: 34.745231628418, lon: 10.7592582702637, country: "Tunisia", name: "Sfax" },
            { cap: false, pop:  1.411, lat: 34.6638412475586, lon: 135.181838989258, country: "Japan", name: "Kobe" },
            { cap: false, pop:  0.490, lat: 31.7737464904785, lon: 35.2252197265625, country: "Israel", name: "Jerusalem" },
            { cap: false, pop:  0.616, lat: 10.1782207489014, lon: -68.0031127929688, country: "Venezuela", name: "Valencia" },
            { cap: false, pop:  1.255, lat: -2.20381617546082, lon: -79.9093933105469, country: "Ecuador", name: "Guayaquil" },
            { cap: false, pop:  4.054, lat: 37.7275123596191, lon: -122.308815002441, country: "US", name: "San Francisco" },
            { cap: false, pop:  0.630, lat: 55.8752517700195, lon: -3.29878330230713, country: "UK", name: "Edinburgh" },
            { cap: false, pop:  0.239, lat: 45.7002830505371, lon: 13.9328374862671, country: "Italy", name: "Trieste" },
            { cap: false, pop:  1.750, lat: 33.3099060058594, lon: 130.317184448242, country: "Japan", name: "Fukuoka" },
            { cap: false, pop:  1.525, lat: 33.6818656921387, lon: 130.797454833984, country: "Japan", name: "Kita Kyushu" },
            { cap: true,  pop:  0.303, lat: 12.1041393280029, lon: 15.2408237457275, country: "Chad", name: "N'Djamena" },
            { cap: true,  pop:  0.991, lat: 32.7516174316406, lon: 13.2118225097656, country: "Libya", name: "Tripoli" },
            { cap: false, pop:  1.550, lat: 38.4389190673828, lon: 27.2057685852051, country: "Turkey", name: "Izmir" },
            { cap: true,  pop:  3.000, lat: -4.38867473602295, lon: 15.4692935943604, country: "Zaire", name: "Kinshasa" },
            { cap: false, pop:  0.978, lat: -34.9185371398926, lon: 138.870681762695, country: "Australia", name: "Adelaide" },
            { cap: true,  pop:  8.600, lat: -6.29390430450439, lon: 106.762466430664, country: "Indonesia", name: "Jakarta" },
            { cap: false, pop:  1.025, lat: -7.02784442901611, lon: 110.444259643555, country: "Indonesia", name: "Semarang" },
            { cap: false, pop:  0.264, lat: -12.0435400009155, lon: -76.8356323242188, country: "Peru", name: "Callao" },
            { cap: false, pop:  1.200, lat: -1.60532903671265, lon: -48.316276550293, country: "Brazil", name: "Belem" },
            { cap: false, pop:  1.270, lat: 36.1483535766602, lon: 120.434127807617, country: "China", name: "Qingdao" },
            { cap: true,  pop:  0.377, lat: 18.0017318725586, lon: 102.680236816406, country: "Laos", name: "Vientiane" },
            { cap: false, pop:  0.220, lat: 47.8011703491211, lon: 13.0908985137939, country: "Austria", name: "Salzburg" },
            { cap: true,  pop:  0.698, lat: 45.8070755004883, lon: 15.9643859863281, country: "Croatia", name: "Zagreb" },
            { cap: true,  pop:  0.273, lat: -3.26908373832703, lon: 29.5335865020752, country: "Burundi", name: "Bujumbura" },
            { cap: true,  pop:  0.185, lat: 35.1650695800781, lon: 33.3851623535156, country: "Cyprus", name: "Nicosia" },
            { cap: true,  pop:  0.182, lat: -2.11793518066406, lon: 29.9914855957031, country: "Rwanda", name: "Kigali" },
            { cap: true,  pop:  0.233, lat: 46.068302154541, lon: 14.639612197876, country: "Slovenia", name: "Ljubljana" },
            { cap: true,  pop:  0.109, lat: -29.2567100524902, lon: 27.8903884887695, country: "Lesotho", name: "Maseru" },
            { cap: true,  pop:  0.133, lat: 49.740406036377, lon: 6.27325582504272, country: "Luxembourg", name: "Luxembourg" },
            { cap: false, pop:  0.770, lat: 51.903621673584, lon: 4.30062437057495, country: "Netherlands", name: "The Hague" },
            { cap: true,  pop:  0.435, lat: 48.2745094299316, lon: 17.2698059082031, country: "Slovakia", name: "Bratislava" },
            { cap: false, pop:  0.201, lat: 52.1100006103516, lon: -106.629997253418, country: "Canada", name: "Saskatoon" },
            { cap: false, pop:  0.187, lat: 50.4099998474121, lon: -104.650001525879, country: "Canada", name: "Regina" },
            { cap: false, pop:  1.038, lat: 31.7800006866455, lon: -106.449996948242, country: "US", name: "El Paso" },
            { cap: false, pop:  0.636, lat: 30.3299999237061, lon: -81.6600036621094, country: "US", name: "Jacksonville" },
            { cap: false, pop:  0.002, lat: 51.3300018310547, lon: -80.7300033569336, country: "Canada", name: "Moosonee" },
            { cap: false, pop:  0.002, lat: 54.8600006103516, lon: -67.0100021362305, country: "Canada", name: "Schefferville" },
            { cap: false, pop:  0.008, lat: 53.310001373291, lon: -60.5499992370605, country: "Canada", name: "Goose Bay" },
            { cap: false, pop:  0.202, lat: -8.75, lon: -63.9000015258789, country: "Brazil", name: "Porto Velho" },
            { cap: false, pop:  0.185, lat: -13.6000003814697, lon: -71.8600006103516, country: "Peru", name: "Cuzco" },
            { cap: false, pop:  0.280, lat: -15.5500001907349, lon: -56.0499992370605, country: "Brazil", name: "Cuiaba" },
            { cap: false, pop:  0.220, lat: -27.3999996185303, lon: -58.9000015258789, country: "Argentina", name: "Resistencia" },
            { cap: false, pop:  0.032, lat: 16.7600002288818, lon: -3.00999999046326, country: "Mali", name: "Tombouctoo" },
            { cap: false, pop:  0.255, lat: 11.8800001144409, lon: 13.2600002288818, country: "Niger", name: "Maiduguri" },
            { cap: false, pop:  0.145, lat: -5.80999994277954, lon: 13.4499998092651, country: "Zaire", name: "Matadi" },
            { cap: false, pop:  0.203, lat: -12.7299995422363, lon: 15.7799997329712, country: "Angola", name: "Huambo" },
            { cap: false, pop:  0.145, lat: -28.6599998474121, lon: 24.8299999237061, country: "South Africa", name: "Kimberley" },
            { cap: false, pop:  0.320, lat: -33.0299987792969, lon: 27.8999996185303, country: "South Africa", name: "East london" },
            { cap: false, pop:  0.247, lat: -7.32999992370605, lon: 19, country: "Zaire", name: "Kahemba" },
            { cap: false, pop:  0.054, lat: -6.17999982833862, lon: 35.75, country: "Tanzania", name: "Dodoma" },
            { cap: false, pop:  0.019, lat: 68.3499984741211, lon: 17.2999992370605, country: "Norway", name: "Narvik" },
            { cap: false, pop:  0.160, lat: 34.4599990844727, lon: 62.2099990844727, country: "Afghanistan", name: "Herat" },
            { cap: false, pop:  0.006, lat: 55.8800010681152, lon: 37.75, country: "Russia", name: "Druzba" },
            { cap: false, pop:  0.146, lat: 39.4799995422363, lon: 76, country: "China", name: "Kashi" },
            { cap: false, pop:  9.415, lat: 24.9799995422363, lon: 121.529998779297, country: "Taiwan", name: "Chingmei" },
            { cap: false, pop:  0.166, lat: 16.4599990844727, lon: 107.699996948242, country: "Vietnam", name: "Hue" },
            { cap: false, pop:  0.073, lat: 1.5, lon: 110.430000305176, country: "Malaysia", name: "Kuching" },
            { cap: false, pop:  0.208, lat: -1.21000003814697, lon: 116.860000610352, country: "Indonesia", name: "Balikpapan" },
            { cap: false, pop:  0.168, lat: 50.3300018310547, lon: 110.75, country: "Russia", name: "Chatanga" },
            { cap: false, pop:  0.006, lat: 52.0499992370605, lon: 113.580001831055, country: "Russia", name: "Chita" },
            { cap: false, pop:  0.001, lat: 67.5800018310547, lon: 133.410003662109, country: "Russia", name: "Verkhoyansk" },
            { cap: false, pop:  0.187, lat: 62.0099983215332, lon: 129.830001831055, country: "Russia", name: "Yakutsk" },
            { cap: false, pop:  0.006, lat: 59.3300018310547, lon: 143.25, country: "Russia", name: "Okhotsk" },
            { cap: false, pop:  0.000, lat: 50.0800018310547, lon: 45.5299987792969, country: "Russia", name: "Nikolayevsk" },
            { cap: false, pop:  0.000, lat: 46.9599990844727, lon: 142.75, country: "Russia", name: "Yuzhno-Sakhalinsk" },
            { cap: false, pop:  0.000, lat: -23.6299991607666, lon: 133.929992675781, country: "Australia", name: "Alice Springs" },
            { cap: false, pop:  0.039, lat: -16.8500003814697, lon: 145.710006713867, country: "Australia", name: "Cairns" },
            { cap: false, pop:  0.106, lat: -19.2999992370605, lon: 146.830001831055, country: "Australia", name: "Townsville" },
            { cap: false, pop:  0.059, lat: -23.4300003051758, lon: 150.479995727539, country: "Australia", name: "Rockhampton" },
            { cap: false, pop:  0.405, lat: -33, lon: 151.910003662109, country: "Australia", name: "Newcastle" },
            { cap: false, pop:  0.175, lat: -43, lon: 147.5, country: "Australia", name: "Hobart" },
            { cap: false, pop:  0.109, lat: -45.8600006103516, lon: 170.5, country: "New Zealand", name: "Dunedin" },
            { cap: false, pop:  0.256, lat: 48.6545677185059, lon: -123.569107055664, country: "Canada", name: "Victoria" },
            { cap: true,  pop:  0.164, lat: 6.60109615325928, lon: 2.63250279426575, country: "Benin", name: "Porto Novo" },
            { cap: false, pop:  1.030, lat: 4.13665008544922, lon: 9.706374168396, country: "Cameroon", name: "Douala" },
            { cap: false, pop:  0.708, lat: -5.19043016433716, lon: 119.722793579102, country: "Indonesia", name: "Vjuag Padang" },
            { cap: false, pop:  0.112, lat: -3.3865532875061, lon: 129.312927246094, country: "Indonesia", name: "Ambon" },
            { cap: false, pop:  1.604, lat: 37.5894508361816, lon: 126.767440795898, country: "South-Korea", name: "Inch`on" },
            { cap: false, pop:  1.680, lat: 39.0317153930664, lon: 121.598197937012, country: "China", name: "Dalian" },
            { cap: false, pop:  1.227, lat: 45.4421310424805, lon: -122.641677856445, country: "US", name: "Portland" },
            { cap: false, pop:  0.810, lat: -3.12230491638184, lon: -60.0146179199219, country: "Brazil", name: "Manaus" },
            { cap: false, pop:  0.227, lat: -2.46000003814697, lon: -54.6100006103516, country: "Brazil", name: "Santarem" },
            { cap: false, pop:  0.053, lat: -46.4099998474121, lon: 168.449996948242, country: "New Zealand", name: "Invercargill" },
            { cap: false, pop:  0.049, lat: -10.2600002288818, lon: 40.1800003051758, country: "Tanzania", name: "Mtwara" },
            { cap: false, pop:  0.100, lat: -18.2299995422363, lon: 49.4099998474121, country: "Madagascar", name: "Toamasina" },
            { cap: false, pop:  0.235, lat: -29.1499996185303, lon: 26.2600002288818, country: "South Africa", name: "Bloemfontein" },
            { cap: false, pop:  0.414, lat: -20.2000007629395, lon: 28.7099990844727, country: "Zimbabwe", name: "Bulawayo" },
            { cap: false, pop:  0.061, lat: -17.8299999237061, lon: 25.8799991607666, country: "Zambia", name: "Livingstone" },
            { cap: false, pop:  0.290, lat: 24.4300003051758, lon: 39.7000007629395, country: "Saudi Arabia", name: "Al Madinah" },
            { cap: false, pop:  0.000, lat: 21.7600002288818, lon: 31.2800006866455, country: "Sudan", name: "Wadi Halfa" },
            { cap: false, pop:  0.191, lat: 24.0799999237061, lon: 32.9500007629395, country: "Egypt", name: "Aswan" },
            { cap: false, pop:  0.000, lat: 25.9099998474121, lon: 13.9099998474121, country: "Libya", name: "Murzuq" },
            { cap: false, pop:  0.000, lat: 27.7000007629395, lon: -8.15999984741211, country: "Algeria", name: "Tindouf" },
            { cap: false, pop:  0.050, lat: 16.9599990844727, lon: 7.98000001907349, country: "Niger", name: "Agadez" },
            { cap: false, pop:  0.140, lat: 13.1800003051758, lon: 30.1599998474121, country: "Sudan", name: "El Obeid" },
            { cap: false, pop:  0.125, lat: 0.0500000007450581, lon: 18.4599990844727, country: "Zaire", name: "Mbandaka" },
            { cap: false, pop:  0.015, lat: 60.6500015258789, lon: -135.009994506836, country: "Canada", name: "Whitehorse" },
            { cap: false, pop:  0.095, lat: -53.1500015258789, lon: -70.8000030517578, country: "Chile", name: "Punte Arenas" },
            { cap: false, pop:  0.084, lat: -41.4799995422363, lon: -73, country: "Chile", name: "Puerto Montt" },
            { cap: false, pop:  0.000, lat: -51.7099990844727, lon: -69.4100036621094, country: "Argentina", name: "Rio Gallegos" },
            { cap: false, pop:  0.097, lat: -45.8300018310547, lon: -67.5, country: "Argentina", name: "Comodoro Rivadavia" },
            { cap: false, pop:  0.327, lat: 29.9599990844727, lon: 32.560001373291, country: "Egypt", name: "Suez" },
            { cap: false, pop:  3.350, lat: 31.0746040344238, lon: 29.9778099060059, country: "Egypt", name: "Alexandria" },
            { cap: false, pop:  0.000, lat: -15.0500001907349, lon: 40.7000007629395, country: "Mozambique", name: "Mocambique" },
            { cap: false, pop:  9.950, lat: 19.0453472137451, lon: 73.1723480224609, country: "India", name: "Bombay" },
            { cap: true,  pop:  2.548, lat: 36.596492767334, lon: 2.99369311332703, country: "Algeria", name: "Algiers" },
            { cap: false, pop:  1.940, lat: 49.989673614502, lon: 36.2083129882813, country: "Ukraine", name: "Kharkov" },
            { cap: false, pop:  1.600, lat: 48.4228897094727, lon: 35.1378936767578, country: "Ukraine", name: "Dnepropetrovsk" },
            { cap: true,  pop:  0.482, lat: 59.2775726318359, lon: 24.7520561218262, country: "Estonia", name: "Tallinn" },
            { cap: false, pop:  0.000, lat: 47.810001373291, lon: 97, country: "Mongolia", name: "Uliastay" },
            { cap: true,  pop:  1.313, lat: 18.4997291564941, lon: -69.9104919433594, country: "Dominican Rp", name: "Santo Domingo" },
            { cap: true,  pop:  0.064, lat: 4.93300008773804, lon: 114.967002868652, country: "Brunei", name: "Bandar Seri Begawan" },
            { cap: true,  pop:  0.095, lat: 13.4452724456787, lon: -16.4946155548096, country: "Gambia", name: "Banjul" },
            { cap: true,  pop:  0.370, lat: 10.6397342681885, lon: -61.490062713623, country: "Trinidad", name: "Port of Spain" },
            { cap: false, pop:  0.302, lat: 16.97438621521, lon: -99.9314956665039, country: "Mexico", name: "Acapulco" },
            { cap: false, pop:  0.000, lat: 64.4001617431641, lon: 177.130187988281, country: "Russia", name: "Anadyr" },
            { cap: false, pop:  0.003, lat: 65.6699981689453, lon: -37.3118667602539, country: "Greenland", name: "Angmagssalik" },
            { cap: false, pop:  0.185, lat: -23.8325366973877, lon: -70.2254486083984, country: "Chile", name: "Antofagasta" },
            { cap: false, pop:  0.294, lat: 40.75, lon: 140.669998168945, country: "Japan", name: "Aomori" },
            { cap: false, pop:  0.436, lat: 32.0430526733398, lon: 20.3086757659912, country: "Libya", name: "Banghazi" },
            { cap: false, pop:  0.000, lat: -15.75, lon: 133.220001220703, country: "Australia", name: "Birdum" },
            { cap: false, pop:  0.000, lat: 2.75, lon: -60.5, country: "Brazil", name: "Boa Vista" },
            { cap: false, pop:  0.280, lat: -6.61999988555908, lon: -79.8300018310547, country: "Peru", name: "Chiclayo" },
            { cap: false, pop:  0.223, lat: -8.930100440979, lon: -78.4531478881836, country: "Peru", name: "Chimbote" },
            { cap: false, pop:  0.001, lat: 58.710765838623, lon: -94.1800003051758, country: "Canada", name: "Churchill" },
            { cap: false, pop:  0.686, lat: 9.98798847198486, lon: 76.5217819213867, country: "India", name: "Cochin" },
            { cap: false, pop:  0.675, lat: -36.8832969665527, lon: -72.8516387939453, country: "Chile", name: "Concepcion" },
            { cap: false, pop:  0.062, lat: -31, lon: -71.0199966430664, country: "Chile", name: "Coquimbo" },
            { cap: false, pop:  0.073, lat: -12.7014999389648, lon: 130.994552612305, country: "Australia", name: "Darwin" },
            { cap: true,  pop:  0.120, lat: 11.5, lon: 43.0999984741211, country: "Djibouti", name: "Djibouti" },
            { cap: false, pop:  0.022, lat: -32.0441665649414, lon: 115.9345703125, country: "Australia", name: "Fremantle" },
            { cap: false, pop:  0.495, lat: 5.34999990463257, lon: 100.547142028809, country: "Malaysia", name: "George Town" },
            { cap: false, pop:  0.001, lat: 69.3831405639648, lon: -53.6300010681152, country: "Greenland", name: "Godhavn" },
            { cap: true,  pop:  0.012, lat: 64.2711868286133, lon: -51.5800018310547, country: "Greenland", name: "Godthab" },
            { cap: false, pop:  0.296, lat: 44.6300010681152, lon: -63.5800018310547, country: "Canada", name: "Halifax" },
            { cap: false, pop:  0.007, lat: 70.3913269042969, lon: 23.9063415527344, country: "Norway", name: "Hammerfest" },
            { cap: false, pop:  0.000, lat: 67.3499984741211, lon: 86.5500030517578, country: "Russia", name: "Igarka" },
            { cap: false, pop:  0.019, lat: 27.2000007629395, lon: 2.52999997138977, country: "Algeria", name: "In Salah" },
            { cap: false, pop:  0.003, lat: 68.2699966430664, lon: -133.669998168945, country: "Canada", name: "Inuvik" },
            { cap: false, pop:  0.050, lat: -4.94999980926514, lon: 30, country: "Tanzania", name: "Kigoma" },
            { cap: false, pop:  0.069, lat: 61.1500015258789, lon: 47, country: "Russia", name: "Kotlas" },
            { cap: false, pop:  0.094, lat: 27, lon: -13.1800003051758, country: "W Sahara", name: "Laayoune" },
            { cap: false, pop:  0.217, lat: 1.420086145401, lon: 124.884239196777, country: "Indonesia", name: "Manado" },
            { cap: false, pop:  0.306, lat: 12.9499998092651, lon: 75.1608810424805, country: "India", name: "Mangalore" },
            { cap: false, pop:  0.535, lat: 31.1499996185303, lon: -8, country: "Morocco", name: "Marrakech" },
            { cap: true,  pop:  0.038, lat: -26.3033809661865, lon: 31.1912975311279, country: "Swaziland", name: "Mbabne" },
            { cap: false, pop:  0.449, lat: 32.8827476501465, lon: 129.857467651367, country: "Japan", name: "Nagasaki" },
            { cap: false, pop:  0.510, lat: -5.78000020980835, lon: -35.25, country: "Brazil", name: "Natal" },
            { cap: false, pop:  0.033, lat: -41.2999992370605, lon: 173.270004272461, country: "New Zealand", name: "Nelson" },
            { cap: false, pop:  0.004, lat: 64.5862808227539, lon: -165.270004272461, country: "US", name: "Nome" },
            { cap: false, pop:  0.174, lat: 69.3300018310547, lon: 88.0999984741211, country: "Russia", name: "Noril`sk" },
            { cap: false, pop:  0.022, lat: 20.8999996185303, lon: -16.825647354126, country: "Mauritania", name: "Nouadnibou" },
            { cap: false, pop:  0.600, lat: 53.7000007629395, lon: 87.1699981689453, country: "Russia", name: "Novokuznetsk" },
            { cap: false, pop:  0.097, lat: 46.9199981689453, lon: -122.879997253418, country: "US", name: "Olympia" },
            { cap: false, pop:  0.297, lat: -0.917578816413879, lon: 100.475059509277, country: "Indonesia", name: "Padang" },
            { cap: false, pop:  0.787, lat: -3, lon: 104.830001831055, country: "Indonesia", name: "Palembang" },
            { cap: false, pop:  0.155, lat: 38.1412391662598, lon: 21.8831691741943, country: "Greece", name: "Patras" },
            { cap: false, pop:  0.269, lat: 53.2000007629395, lon: 158.720001220703, country: "Russia", name: "Petropavloski-Kamchatskiy" },
            { cap: true,  pop:  0.083, lat: 42.5, lon: 19.3999996185303, country: "Montenegro", name: "Podgorica" },
            { cap: false, pop:  0.294, lat: -4.63870811462402, lon: 12.0580930709839, country: "Congo", name: "Pointe Noire" },
            { cap: false, pop:  0.124, lat: -0.819999992847443, lon: 9.15334415435791, country: "Gabon", name: "Port Gentil" },
            { cap: false, pop:  0.016, lat: 54.420280456543, lon: -130.048080444336, country: "Canada", name: "Prince Rupert" },
            { cap: false, pop:  0.121, lat: 45.338134765625, lon: -65.6499481201172, country: "Canada", name: "Saint John" },
            { cap: false, pop:  0.091, lat: 15.9512100219727, lon: -16.2978382110596, country: "Senegal", name: "Saint Louis" },
            { cap: false, pop:  0.000, lat: 66.5699996948242, lon: 66.5800018310547, country: "Russia", name: "Salekhard" },
            { cap: false, pop:  0.241, lat: 41.3199996948242, lon: 36.3699989318848, country: "Turkey", name: "Samsun" },
            { cap: false, pop:  0.600, lat: -2.5, lon: -44.4300575256348, country: "Brazil", name: "Sao Luis" },
            { cap: true,  pop:  0.341, lat: 43.8699989318848, lon: 18.4300003051758, country: "Bosnia/Herz", name: "Sarajevo" },
            { cap: false, pop:  0.000, lat: 70.5285720825195, lon: -22.9963226318359, country: "Greenland", name: "Scoresbyund" },
            { cap: false, pop:  0.029, lat: 50.2825469970703, lon: -66.4025421142578, country: "Canada", name: "Sept-Iles" },
            { cap: false, pop:  0.003, lat: 60.1199989318848, lon: -149.449996948242, country: "US", name: "Seward" },
            { cap: true,  pop:  0.445, lat: 42, lon: 21.5300006866455, country: "Macedonia", name: "Skopje" },
            { cap: false, pop:  0.000, lat: 22.8299999237061, lon: 5.55000019073486, country: "Algeria", name: "Tamanrasset" },
            { cap: false, pop:  0.000, lat: 77.6699981689453, lon: -69, country: "Greenland", name: "Thule" },
            { cap: false, pop:  0.000, lat: 71.6999969482422, lon: 128.75, country: "Russia", name: "Tiksi" },
            { cap: false, pop:  0.055, lat: -23.2901554107666, lon: 44.0190925598145, country: "Madagascar", name: "Toliara" },
            { cap: false, pop:  0.354, lat: -7.92999982833862, lon: -79, country: "Peru", name: "Trujillo" },
            { cap: false, pop:  0.604, lat: 17.75, lon: 83.3300018310547, country: "India", name: "Vishakhapatnam" },
            { cap: false, pop:  0.116, lat: 67.8000030517578, lon: 64.3300018310547, country: "Russia", name: "Vorkuta" },
            { cap: false, pop:  0.230, lat: 31.9699993133545, lon: 54.4500007629395, country: "Iran", name: "Yazd" },
            { cap: false, pop:  0.282, lat: 29.6000003814697, lon: 60.8300018310547, country: "Iran", name: "Zahedan" },
            { cap: false, pop:  0.318, lat: 12.861159324646, lon: 45.1800003051758, country: "Yemen", name: "Aden" },
            { cap: true,  pop:  1.500, lat: 9.02999973297119, lon: 38.7000007629395, country: "Ethiopia", name: "Adis Abeba" },
            { cap: true,  pop:  1.375, lat: 29.1949901580811, lon: 48.0027770996094, country: "Kuwait", name: "Al Kuwayt" },
            { cap: true,  pop:  0.663, lat: -18.8700008392334, lon: 47.5, country: "Madagascar", name: "Antananarivo" },
            { cap: true,  pop:  1.250, lat: 24.6499996185303, lon: 46.7700004577637, country: "Saudi Arabia", name: "Ar Riyad" },
            { cap: true,  pop:  0.275, lat: 15.3299999237061, lon: 38.9700012207031, country: "Eritrea", name: "Asmara" },
            { cap: true,  pop:  0.700, lat: -25.2199993133545, lon: -57.6699981689453, country: "Paraguay", name: "Asuncion" },
            { cap: true,  pop:  3.027, lat: 38.1216011047363, lon: 23.6548633575439, country: "Greece", name: "Athens" },
            { cap: false, pop:  1.120, lat: 40.6500015258789, lon: 109.980003356934, country: "China", name: "Baotou" },
            { cap: false, pop:  4.040, lat: 41.5299987792969, lon: 2.17000007629395, country: "Spain", name: "Barcelona" },
            { cap: false, pop:  1.140, lat: 11.0142946243286, lon: -74.6800003051758, country: "Colombia", name: "Barranquilla" },
            { cap: false, pop:  0.292, lat: -19.7692832946777, lon: 35.0231704711914, country: "Mozambique", name: "Beira" },
            { cap: true,  pop:  1.675, lat: 33.7799987792969, lon: 35.6579437255859, country: "Lebanon", name: "Beirut" },
            { cap: true,  pop:  0.005, lat: 17.1200008392334, lon: -88.8000030517578, country: "Belize", name: "Belmopan" },
            { cap: false, pop:  0.239, lat: 60.3499984741211, lon: 5.49067831039429, country: "Norway", name: "Bergen" },
            { cap: true,  pop:  0.109, lat: 11.9109897613525, lon: -15.6499996185303, country: "GuineaBissau", name: "Bissau" },
            { cap: false, pop:  1.790, lat: -33.8040084838867, lon: 18.6904315948486, country: "South Africa", name: "cape Town" },
            { cap: false, pop:  0.625, lat: 51.5, lon: -3.15000009536743, country: "UK", name: "Cardiff" },
            { cap: false, pop:  2.475, lat: 33.5444107055664, lon: -7.53409194946289, country: "Morocco", name: "Casablanca" },
            { cap: true,  pop:  0.038, lat: 4.92000007629395, lon: -52.4000015258789, country: "Fr Guiana", name: "Cayenne" },
            { cap: false, pop:  1.392, lat: 22.4799995422363, lon: 91.8327941894531, country: "Bangladesh", name: "Chittagong" },
            { cap: true,  pop:  2.050, lat: 7.01999998092651, lon: 80.0883331298828, country: "Sri Lanka", name: "Colombo" },
            { cap: true,  pop:  0.800, lat: 9.52000045776367, lon: -12.8000001907349, country: "Guinea", name: "Conakry" },
            { cap: true,  pop:  1.428, lat: 14.6300001144409, lon: -16.8480949401855, country: "Senegal", name: "Dakar" },
            { cap: false, pop:  1.405, lat: 39.75, lon: -105.069999694824, country: "US", name: "Denver" },
            { cap: true,  pop:  0.595, lat: 38.6300010681152, lon: 68.9000015258789, country: "Tajikistan", name: "Dushanfe" },
            { cap: false, pop:  0.785, lat: 53.5699996948242, lon: -113.269996643066, country: "Canada", name: "Edmonton" },
            { cap: false, pop:  1.871, lat: 30.4699993133545, lon: 30.8500003814697, country: "Egypt", name: "Giza" },
            { cap: true,  pop:  0.525, lat: 8.38277053833008, lon: -12.9102764129639, country: "Sierra Leone", name: "Freetown" },
            { cap: true,  pop:  0.616, lat: 42.8800010681152, lon: 74.7699966430664, country: "Kyrgyzstan", name: "Frunze" },
            { cap: false, pop:  0.805, lat: 44.4550895690918, lon: 8.92229557037354, country: "Italy", name: "Genova" },
            { cap: true,  pop:  0.188, lat: 6.76999998092651, lon: -58.1699981689453, country: "Guyana", name: "Georgetown" },
            { cap: false, pop:  0.711, lat: 57.75, lon: 12, country: "Sweden", name: "Goteborg" },
            { cap: true,  pop:  0.890, lat: -17.8299999237061, lon: 31.0200004577637, country: "Zimbabwe", name: "Harare" },
            { cap: true,  pop:  2.125, lat: 23.0489521026611, lon: -82.4164505004883, country: "Cuba", name: "Havana" },
            { cap: false, pop:  1.300, lat: 21.6200008392334, lon: 39.3733062744141, country: "Saudi Arabia", name: "Jiddah" },
            { cap: true,  pop:  0.460, lat: 0.319999992847443, lon: 32.5800018310547, country: "Uganda", name: "Kampala" },
            { cap: false, pop:  0.538, lat: 11.9200000762939, lon: 8.52000045776367, country: "Nigeria", name: "Kano" },
            { cap: false, pop:  1.845, lat: 22.6734161376953, lon: 120.341484069824, country: "Taiwan", name: "Kao-Hsiung" },
            { cap: false, pop:  5.300, lat: 24.8500003814697, lon: 67.0299987792969, country: "Pakistan", name: "Karachi" },
            { cap: false, pop:  0.601, lat: 48.5299987792969, lon: 135.070007324219, country: "Russia", name: "Khabarovsk" },
            { cap: true,  pop:  0.924, lat: 15.5500001907349, lon: 32.5299987792969, country: "Sudan", name: "Khartoum" },
            { cap: true,  pop:  0.665, lat: 47, lon: 28.8299999237061, country: "Moldova", name: "Kishinev" },
            { cap: true,  pop:  1.685, lat: 55.7200012207031, lon: 12.5500001907349, country: "Denmark", name: "Kobenhavn" },
            { cap: true,  pop:  3.800, lat: 6.44999980926514, lon: 3.29999995231628, country: "Nigeria", name: "Lagos" },
            { cap: false, pop:  0.255, lat: 49.3240203857422, lon: 0.219999998807907, country: "France", name: "Le Havre" },
            { cap: true,  pop:  0.236, lat: -0.504144549369812, lon: 9.49045658111572, country: "Gabon", name: "Libreville" },
            { cap: true,  pop:  0.234, lat: -13.9200000762939, lon: 33.8199996948242, country: "Malawi", name: "Lilongwe" },
            { cap: true,  pop:  4.344, lat: -12.0679960250854, lon: -76.8235549926758, country: "Peru", name: "Lima" },
            { cap: true,  pop:  2.250, lat: 38.7299995422363, lon: -9.13000011444092, country: "Portugal", name: "Lisboa" },
            { cap: false, pop:  1.525, lat: 53.4226875305176, lon: -2.76683640480042, country: "UK", name: "Liverpool" },
            { cap: true,  pop:  0.400, lat: 6.28000020980835, lon: 1.35000002384186, country: "Togo", name: "Lome" },
            { cap: false, pop:  9.764, lat: 34, lon: -118.25, country: "US", name: "Los Angeles" },
            { cap: true,  pop:  1.460, lat: -9, lon: 13.4617786407471, country: "Angola", name: "Luanda" },
            { cap: false, pop:  0.543, lat: -11.6800003051758, lon: 27.5499992370605, country: "Zaire", name: "Lumumbashi" },
            { cap: true,  pop:  0.536, lat: -15.4300003051758, lon: 28.1700000762939, country: "Zambia", name: "Lusaka" },
            { cap: true,  pop:  0.031, lat: 3.64468479156494, lon: 8.81999969482422, country: "Eq Guinea", name: "Malabo" },
            { cap: true,  pop:  5.474, lat: 14.5500001907349, lon: 121.173408508301, country: "Philippines", name: "Manila" },
            { cap: false, pop:  1.225, lat: 43.2999992370605, lon: 5.38000011444092, country: "France", name: "Marseille" },
            { cap: true,  pop:  0.050, lat: 23.5166397094727, lon: 58.6274795532227, country: "Oman", name: "Masqat" },
            { cap: false, pop:  0.200, lat: 23.3615112304688, lon: -106.269996643066, country: "Mexico", name: "Mazatlan" },
            { cap: false, pop:  0.442, lat: -4.01999998092651, lon: 39.6699981689453, country: "Kenya", name: "Mombasa" },
            { cap: true,  pop:  0.465, lat: 6.51743936538696, lon: -10.7700004577637, country: "Liberia", name: "Monrovia" },
            { cap: true,  pop:  1.550, lat: -34.9199981689453, lon: -56.1699981689453, country: "Uruguay", name: "Montevideo" },
            { cap: true,  pop: 13.100, lat: 55.75, lon: 37.7000007629395, country: "Russia", name: "Moscow" },
            { cap: true,  pop:  1.286, lat: -1.16999995708466, lon: 36.8300018310547, country: "Kenya", name: "Nairobi" },
            { cap: false, pop:  2.875, lat: 40.8300018310547, lon: 14.2700004577637, country: "Italy", name: "Napoli" },
            { cap: false, pop: 16.472, lat: 40.75, lon: -74.0999984741211, country: "US", name: "New York" },
            { cap: false, pop:  0.329, lat: 40.7200012207031, lon: -74.1999969482422, country: "US", name: "Newark" },
            { cap: true,  pop:  0.285, lat: 18.0300006866455, lon: -15.7828607559204, country: "Mauritania", name: "Nouakchott" },
            { cap: false, pop:  0.138, lat: 55.574535369873, lon: 9.90299892425537, country: "Denmark", name: "Odense" },
            { cap: false, pop:  0.526, lat: 15.6199998855591, lon: 32.4799995422363, country: "Sudan", name: "Omdurman" },
            { cap: false, pop:  0.629, lat: 35.75, lon: -0.519999980926514, country: "Algeria", name: "Oran" },
            { cap: true,  pop:  0.720, lat: 59.9300003051758, lon: 10.7200002670288, country: "Norway", name: "Oslo" },
            { cap: true,  pop:  0.442, lat: 12.4799995422363, lon: -1.66999995708466, country: "Burkina Faso", name: "Ouagadouou" },
            { cap: false, pop:  0.724, lat: 38.1300010681152, lon: 13.3999996185303, country: "Italy", name: "Palermo" },
            { cap: true,  pop:  0.625, lat: 8.94999980926514, lon: -79.4000015258789, country: "Panama", name: "Panama" },
            { cap: true,  pop:  0.241, lat: 5.92999982833862, lon: -55.2299995422363, country: "Suriname", name: "Paramaribo" },
            { cap: false, pop:  0.994, lat: -31.9758644104004, lon: 115.923370361328, country: "Australia", name: "Perth" },
            { cap: true,  pop:  0.152, lat: -9.55000019073486, lon: 147.414520263672, country: "Papua N Guin", name: "Port Moresby" },
            { cap: false, pop:  1.225, lat: 41.1500015258789, lon: -8.48794841766357, country: "Portugal", name: "Porto" },
            { cap: false, pop:  0.203, lat: 31.6000003814697, lon: 65.5, country: "Afghanistan", name: "Qandahar" },
            { cap: false, pop:  1.326, lat: 14.6499996185303, lon: 121.029998779297, country: "Philippines", name: "Quezon City" },
            { cap: true,  pop:  0.980, lat: 33.9201965332031, lon: -6.74804067611694, country: "Morocco", name: "Rabat" },
            { cap: true,  pop:  0.138, lat: 64.3132629394531, lon: -21.336820602417, country: "Iceland", name: "Reykjavik" },
            { cap: true,  pop:  1.005, lat: 56.8800010681152, lon: 24.0499992370605, country: "latvia", name: "Riga" },
            { cap: true,  pop:  3.175, lat: 41.8800010681152, lon: 12.5200004577637, country: "Italy", name: "Roma" },
            { cap: false, pop:  2.050, lat: -12.6002569198608, lon: -38.4799995422363, country: "Brazil", name: "Salvador" },
            { cap: false, pop:  0.848, lat: 29.6299991607666, lon: 52.5699996948242, country: "Iran", name: "Shiraz" },
            { cap: true,  pop:  1.450, lat: 59.2446327209473, lon: 18.0842685699463, country: "Sweden", name: "Stockholm" },
            { cap: false, pop:  2.028, lat: -7.40000009536743, lon: 112.684371948242, country: "Indonesia", name: "Surabaja" },
            { cap: false, pop:  0.657, lat: 23.1700000762939, lon: 120.230003356934, country: "Taiwan", name: "T`ai-nan" },
            { cap: false, pop:  0.595, lat: 27.9973583221436, lon: -82.5930252075195, country: "US", name: "Tampa" },
            { cap: true,  pop:  1.670, lat: 31.9171981811523, lon: 34.8568344116211, country: "Israel", name: "Tel Aviv-Yafo" },
            { cap: false, pop:  0.706, lat: 40.6300010681152, lon: 22.7999992370605, country: "Greece", name: "Thessaloniki" },
            { cap: true,  pop:  2.325, lat: 41.247932434082, lon: 69.3498687744141, country: "Uzbekistan", name: "Toshkent" },
            { cap: false, pop:  0.198, lat: 34.3437576293945, lon: 36.0070686340332, country: "Lebanon", name: "Tripoli" },
            { cap: false, pop:  0.675, lat: -32.9000015258789, lon: -71.2993392944336, country: "Chile", name: "Valparaiso" },
            { cap: false, pop:  1.381, lat: 49.274299621582, lon: -122.963066101074, country: "Canada", name: "Vancouver" },
            { cap: false, pop:  0.648, lat: 43.1300010681152, lon: 131.960433959961, country: "Russia", name: "Vladivostok" },
            { cap: false, pop:  0.017, lat: -23.1018676757813, lon: 14.6171045303345, country: "Namibia", name: "Walvis Bay" },
            { cap: true,  pop:  0.115, lat: -22.5699996948242, lon: 17.1000003814697, country: "Namibia", name: "Windhoek" },
            { cap: true,  pop:  0.350, lat: -41.2103958129883, lon: 175.144943237305, country: "New Zealand", name: "Wellington" },
            { cap: false, pop:  2.077, lat: 47.5885543823242, lon: -122.316650390625, country: "US", name: "Seattle" },
            { cap: false, pop:  2.099, lat: 32.7614593505859, lon: -117.125495910645, country: "US", name: "San Diego" },
            { cap: false, pop:  0.110, lat: -20.2600002288818, lon: -69.9132614135742, country: "Chile", name: "Iquique" },
            { cap: true,  pop:  0.243, lat: 24.2360076904297, lon: 54.619270324707, country: "Untd Arab Em", name: "Abu Zaby" },
            { cap: false, pop:  0.199, lat: 7.57660102844238, lon: -72.0054550170898, country: "Venezuela", name: "San Cristobal" },
            { cap: false, pop:  0.509, lat: 46.25, lon: 48, country: "Russia", name: "Astrakhan" },
            { cap: false, pop:  0.000, lat: 30.1386032104492, lon: 9.81835079193115, country: "Libya", name: "Ghadamis" },
            { cap: false, pop:  0.077, lat: -31.3051528930664, lon: -57.7087745666504, country: "Uruguay", name: "Salto" },
            { cap: false, pop:  0.012, lat: 62.5206146240234, lon: -114.061363220215, country: "Canada", name: "Yellowknife" },
            { cap: false, pop:  0.043, lat: 19.7148151397705, lon: -155.067291259766, country: "US", name: "Hilo" },
            { cap: false, pop:  0.763, lat: 21.3211765289307, lon: -157.806182861328, country: "US", name: "Honolulu" },
            { cap: false, pop:  0.184, lat: 61.188648223877, lon: -149.172973632813, country: "US", name: "Anchorage" },
            { cap: false, pop:  0.040, lat: 64.8387451171875, lon: -147.651184082031, country: "US", name: "Fairbanks" },
            { cap: false, pop:  0.020, lat: 58.3910064697266, lon: -134.132476806641, country: "US", name: "Juneau" },
            { cap: false, pop:  0.629, lat: 37.30810546875, lon: -121.847457885742, country: "US", name: "San Jose" },
            { cap: false, pop:  0.386, lat: 28.5581398010254, lon: -105.966636657715, country: "Mexico", name: "Chihuaha" },
            { cap: false, pop:  0.385, lat: 19.0096759796143, lon: -96.0840606689453, country: "Mexico", name: "Veracruz" },
            { cap: false, pop:  0.154, lat: 16.9209060668945, lon: -96.9420394897461, country: "Mexico", name: "Oaxaca" },
            { cap: false, pop:  0.000, lat: 78.1999969482422, lon: 15.6599998474121, country: "Norway", name: "longyearbyen" },
            { cap: true,  pop:  5.396, lat: 22.4284057617188, lon: 114.145706176758, country: "UK", name: "Hong Kong" },
            { cap: false, pop:  0.775, lat: 22.3798961639404, lon: 114.230117797852, country: "UK", name: "Kowloon" },
            { cap: false, pop:  3.025, lat: 1.22979354858398, lon: 104.177116394043, country: "Singapore", name: "Singapore" },
        ];

        this.capitals = this.locations.filter(city => city.cap);
        this.cities = this.locations.filter(city => !city.cap);
        return this.locations
    }
}
```
```typescript
export default class WorldUtils {

    // calculate geo-paths between two locations using great circle formula
    public static calcPaths(origin: any, dest: any): any[] {
        let interval = 200;
        let paths: any[] = [[]];
        let pathID = 0;
        let distance = this.calcDistance(origin, dest);
        if (distance <= interval) {
            paths[pathID].push({ x: origin.lon, y: origin.lat });
            paths[pathID].push({ x: dest.lon, y: dest.lat });
        } else {
            let current = origin;
            let previous = origin;

            for (let dist = interval; dist <= distance; dist += interval)
            {
                previous = current
                paths[pathID].push({ x: current.lon, y: current.lat });

                let bearing = this.calcBearing(current, dest);
                current = this.calcDestination(current, bearing, interval);
                // ensure geo-path wrap around the world through the new date-line
                if (previous.lon > 150 && current.lon < -150) {
                    paths[pathID].push({ x: 180, y: current.lat });
                    paths.push([]);
                    pathID++
                    current = { lon: -180, lat: current.lat }
                } else if (previous.lon < -150 && current.lon > 150) {
                    paths[pathID].push({ x: -180, y: current.lat });
                    paths.push([]);
                    pathID++
                    current = { lon: 180, lat: current.lat }
                }
            }
            paths[pathID].push({ x: dest.lon, y: dest.lat });
        }
        return paths;
    }

    // calculate bearing angle between two locations
    public static calcBearing(origin: any, dest: any): number
    {
        origin = this.toRadianLocation(origin);
        dest = this.toRadianLocation(dest);
        let range = (dest.lon - origin.lon);
        let y = Math.sin(range) * Math.cos(dest.lat);
        let x = Math.cos(origin.lat) * Math.sin(dest.lat) -
                Math.sin(origin.lat) * Math.cos(dest.lat) * Math.cos(range);
        let angle = Math.atan2(y, x);
        return this.toDegreesNormalized(angle);
    }

    // calculate destination for origin location and travel distance
    public static calcDestination(origin: any, bearing: number, distance: number): any {
        let radius = 6371.0;
        origin = this.toRadianLocation(origin);
        bearing = this.toRadians(bearing);
        distance = distance / radius; // angular distance in radians

        let lat = Math.asin(Math.sin(origin.lat) * Math.cos(distance) +
                       Math.cos(origin.lat) * Math.sin(distance) * Math.cos(bearing));
        let x = Math.sin(bearing) * Math.sin(distance) * Math.cos(origin.lat);
        let y = Math.cos(distance) - Math.sin(origin.lat) * Math.sin(origin.lat);
        let lon = origin.lon + Math.atan2(x, y);
        // normalize lon to coordinate between -180º and +180º
        lon = (lon + 3 * Math.PI) % (2 * Math.PI) - Math.PI;

        lon = this.toDegrees(lon);
        lat = this.toDegrees(lat);

        return { lon: lon, lat: lat };
    }

    // calculate distance between two locations
    public static calcDistance(origin: any, dest: any): number {
        origin = this.toRadianLocation(origin);
        dest = this.toRadianLocation(dest);
        let sinProd = Math.sin(origin.lat) * Math.sin(dest.lat);
        let cosProd = Math.cos(origin.lat) * Math.cos(dest.lat);
        let lonDelta = (dest.lon - origin.lon);

        let angle = Math.acos(sinProd + cosProd * Math.cos(lonDelta));
        let distance = angle * 6371.0;
        return distance; // * 6371.0; // in km
    }

    public static toRadianLocation(geoPoint: any): any {
        let x = this.toRadians(geoPoint.lon);
        let y = this.toRadians(geoPoint.lat);
        return { lon: x, lat: y };
    }

    public static toRadians(degrees: number): number
    {
        return degrees * Math.PI / 180;
    }

    public static toDegrees(radians: number): number {
        return (radians * 180.0 / Math.PI);
    }

    public static toDegreesNormalized(radians: number): number
    {
        let degrees = this.toDegrees(radians);
        degrees = (degrees + 360) % 360;
        return degrees;
    }

    // converts latitude coordinate to a string
    public static toStringLat(latitude: number): string {
        let str = Math.abs(latitude).toFixed(1) + "°";
        return latitude > 0 ? str + "N" : str + "S";
    }

    // converts longitude coordinate to a string
    public static toStringLon(coordinate: number): string {
        let val = Math.abs(coordinate);
        let str = val < 100 ? val.toFixed(1) : val.toFixed(0);
        return coordinate > 0 ? str + "°E" : str + "°W";
    }

    public static toStringAbbr(value: number): string {
        if (value > 1000000000000) {
            return (value / 1000000000000).toFixed(1) + " T"
        } else if (value > 1000000000) {
            return (value / 1000000000).toFixed(1) + " B"
        } else if (value > 1000000) {
            return (value / 1000000).toFixed(1) + " M"
        } else if (value > 1000) {
            return (value / 1000).toFixed(1) + " K"
        }
        return value.toFixed(0);
    }

    public static getLongitude(location: any): number {
        if (location.x) return location.x;
        if (location.lon) return location.lon;
        if (location.longitude) return location.longitude;
        return Number.NaN;
    }

    public static getLatitude(location: any): number {
        if (location.y) return location.y;
        if (location.lat) return location.lat;
        if (location.latitude) return location.latitude;
        return Number.NaN;
    }

    public static getBounds(locations: any[]): any {
        let minLat = 90;
        let maxLat = -90;
        let minLon = 180;
        let maxLon = -180;

        for (const location of locations) {
            const crrLon = this.getLongitude(location);
            if (!Number.isNaN(crrLon)) {
                minLon = Math.min(minLon, crrLon);
                maxLon = Math.max(maxLon, crrLon);
            }

            const crrLat = this.getLatitude(location);
            if (!Number.isNaN(crrLat)) {
                minLat = Math.min(minLat, crrLat);
                maxLat = Math.max(maxLat, crrLat);
            }

            // if (location.x) {
            //     minLon = Math.min(minLon, location.x);
            //     maxLon = Math.max(maxLon, location.x);
            // } else if (location.lon) {
            //     minLon = Math.min(minLon, location.lon);
            //     maxLon = Math.max(maxLon, location.lon);
            // } else if (location.longitude) {
            //     minLon = Math.min(minLon, location.longitude);
            //     maxLon = Math.max(maxLon, location.longitude);
            // }
            // if (location.y) {
            //     minLat = Math.min(minLat, location.y);
            //     maxLat = Math.max(maxLat, location.y);
            // } else if (location.lat) {
            //     minLat = Math.min(minLat, location.lat);
            //     maxLat = Math.max(maxLat, location.lat);
            // } else if (location.latitude) {
            //     minLat = Math.min(minLat, location.latitude);
            //     maxLat = Math.max(maxLat, location.latitude);
            // }
        }

        const geoBounds = {
            left: minLon,
            top: minLat,
            width: Math.abs(maxLon - minLon),
            height: Math.abs(maxLat - minLat)
        };
        return geoBounds;
    }

    public static getNightShapes(): any[] {
        let nightShape = [];

        let line: any[] = [];

        for (let lon = -180; lon <= 180; lon += 1) {

            // let line: any[] = [{x: lon, y: -90}, {x: lon, y: 90}];
            let x = lon;
            let y = 75 * Math.cos(lon * Math.PI / 180);
            line.push({x: x, y: y});
        }
        // line.push({x: 180, y: 90});
        // line.push({x: -180, y: 90});
        // line.push({x: -180, y: -90});

        let coordinateLine = {points: [line]};

        nightShape.push(coordinateLine);

        return nightShape;
    }

}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WorldLocations from "./WorldLocations";
import WorldUtils from "./WorldUtils"
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { MarkerType } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapTypeScatterSymbolSeries extends React.Component {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);
        this.createTooltip = this.createTooltip.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <div className="container" >
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        width="100%"
                        height="100%"
                        zoomable="true" />
                </div>
                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.6, height: 0.6 });

        this.addSeriesWith(WorldLocations.getCities(), "Gray");
        this.addSeriesWith(WorldLocations.getCapitals(),"rgb(32, 146, 252)");
    }

    public addSeriesWith(locations: any[], brush: string)
    {
        const symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });
        symbolSeries.dataSource = locations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = brush;
        symbolSeries.tooltipTemplate = this.createTooltip;

        this.geoMap.series.add(symbolSeries);
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const brush = dataContext.series.markerOutline;
        const seriesStyle = { color: brush} as React.CSSProperties;

        const lat = WorldUtils.toStringLat(dataItem.lat);
        const lon = WorldUtils.toStringLon(dataItem.lon);

        return <div>
            <div className="tooltipTitle" style={seriesStyle}>{dataItem.name}</div>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Country:</div>
                    <div className="tooltipVal">{dataItem.country}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Latitude:</div>
                    <div className="tooltipVal">{lat}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Longitude:</div>
                    <div className="tooltipVal">{lon}</div>
                </div>
            </div>
        </div>
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapTypeScatterSymbolSeries/>);
```


<div class="divider--half"></div>

## Data Requirements

Similarly to other types of geographic series in the map component, the [`IgrGeographicSymbolSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html) has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in this object must have two numeric data columns that store a geographic location (longitude and latitude). These data columns are then mapped to the [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html#latitudeMemberPath) and [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html#longitudeMemberPath) properties. The [`IgrGeographicSymbolSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html) uses values of these mapped data columns to plot symbol elements in the geographic map component.

## Code Snippet

The following code shows how to bind the [`IgrGeographicSymbolSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html) to locations of cities loaded from a shape file using the [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html).

<!-- React -->

```tsx

import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
// ...

public render() {
    return (
    <IgrGeographicMap
        ref={this.onMapReferenced}
        width="600px"
        height="600px"
        zoomable="true" />
    );
}
```

```ts
public onMapReferenced(map: IgrGeographicMap) {
    this.geoMap = map;
    this.addSeries(WorldLocations.getCities(), "Gray");
    this.addSeries(WorldLocations.getCapitals(),"rgb(32, 146, 252)");
}

public addSeries(locations: any[], brush: string)
{
    const symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });
    symbolSeries.dataSource = locations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerBrush  = "White";
    symbolSeries.markerOutline = brush;

    this.geoMap.series.add(symbolSeries);
}
```

## API References

- [`IgrGeographicSymbolSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html)
- `ItemsSource`
- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html#longitudeMemberPath)
- [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html)
