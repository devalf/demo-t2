const products = [
    {
        'guid': '076759d0-5af3-4819-a72d-ffe120212f55',
        'title': 'Lorem',
        'picture': 'https://picsum.photos/250/250',
        'company': 'ENJOLA',
        'about': 'Proident consectetur fugiat occaecat cupidatat laborum esse in laborum '
            + 'reprehenderit ut veniam. Elit fugiat laborum aliqua aute irure adipisicing sit'
            + ' ea dolore nisi aliqua tempor. Enim veniam ad culpa aliqua. Velit eiusmod in'
            + ' aliquip ullamco non dolore elit. Quis et deserunt qui excepteur ad dolore '
            + 'laborum id veniam ullamco dolore consectetur duis. Laboris laborum laborum '
            + 'dolor laboris cupidatat cupidatat deserunt sint ex sit. Consectetur nulla pariatur ad et.\r\n',
        'registered': '2014-11-24T08:03:39-02:00',
        'tags': [
            'consectetur',
            'voluptate',
            'fugiat',
            'adipisicing',
            'eu',
            'dolore',
            'veniam'
        ],
        'price': 239,
        'product_condition': 'used'
    },
    {
        'guid': '24cba56d-c267-4a87-8cb9-31d98e7b9e5c',
        'title': 'Ipsum',
        'picture': 'https://picsum.photos/250/250',
        'company': 'RECOGNIA',
        'about': 'Eu deserunt anim quis officia labore tempor velit quis. Labore fugiat amet magna'
            + ' excepteur laborum in dolor consequat eiusmod dolore nostrud. Excepteur sunt duis non '
            + 'nulla do voluptate labore dolor. Eu ut magna exercitation anim excepteur.\r\n',
        'registered': '2015-04-11T01:08:54-03:00',
        'tags': [
            'in',
            'elit',
            'mollit',
            'dolore',
            'culpa',
            'pariatur',
            'qui'
        ],
        'price': 66
    },
    {
        'guid': '3dcc7cec-d2b8-49a8-81bc-8c05583024fc',
        'title': 'Dolor',
        'picture': 'https://picsum.photos/250/250',
        'company': 'ECRATER',
        'about': 'Nostrud voluptate tempor culpa eu. Amet ut occaecat exercitation irure nisi eu '
            + 'eiusmod duis duis. Exercitation nisi et esse voluptate do est.\r\n',
        'registered': '2017-03-27T07:44:23-03:00',
        'tags': [
            'non',
            'velit',
            'fugiat',
            'excepteur',
            'fugiat',
            'magna',
            'cillum'
        ],
        'price': 204,
        'product_condition': 'new'
    },
    {
        'guid': '77a65ed2-3a9e-41bb-bb82-032406f560a5',
        'title': 'Sit',
        'picture': 'https://picsum.photos/250/250',
        'company': 'ORBIN',
        'about': 'Sunt amet magna qui dolore. Dolore consequat aute ullamco cillum est sit sit '
            + 'do exercitation aliqua dolor cupidatat aute eiusmod. Nostrud in ad aliquip fugiat labore.\r\n',
        'registered': '2019-11-14T07:05:56-02:00',
        'tags': [
            'pariatur',
            'laborum',
            'eu',
            'eu',
            'ut',
            'mollit',
            'fugiat'
        ],
        'price': 51
    },
    {
        'guid': '713bb9b8-18bb-482b-a3b9-4f7759052078',
        'title': 'Amet',
        'picture': 'https://picsum.photos/250/250',
        'company': 'KIOSK',
        'about': 'Dolore sunt esse incididunt excepteur occaecat. In non est laborum incididunt'
            + ' elit ad sit eu exercitation ipsum dolore aliquip. Sunt et tempor proident deserunt '
            + 'qui enim cupidatat ipsum amet mollit duis duis.\r\n',
        'registered': '2019-05-13T03:44:04-03:00',
        'tags': [
            'esse',
            'ut',
            'aute',
            'ullamco',
            'cupidatat',
            'ea',
            'non'
        ],
        'price': 202
    },
    {
        'guid': '81fecfd8-7848-4b32-bf3a-fa6d7c9e77ba',
        'title': 'Consectetur',
        'picture': 'https://picsum.photos/250/250',
        'company': 'SHADEASE',
        'about': 'Quis occaecat adipisicing anim dolore Lorem culpa. Ad excepteur enim '
            + 'cillum nulla id. Quis non officia voluptate cupidatat anim proident occaecat '
            + 'tempor qui officia commodo dolor consectetur. Et pariatur laboris labore minim '
            + 'fugiat est labore elit.\r\n',
        'registered': '2016-07-25T12:31:13-03:00',
        'tags': [
            'reprehenderit',
            'nostrud',
            'duis',
            'officia',
            'reprehenderit',
            'mollit',
            'commodo'
        ],
        'price': 183
    },
    {
        'guid': '1313a45a-d47a-4c0b-b4f7-7fbf2b025551',
        'title': 'Adipisicing',
        'picture': 'https://picsum.photos/250/250',
        'company': 'IDEGO',
        'about': 'Ex nisi et qui dolor irure nisi duis mollit eiusmod aliqua nostrud. Velit anim '
            + 'sunt est veniam anim laboris officia adipisicing incididunt sunt laborum irure id. Ad '
            + 'excepteur sit deserunt sit elit nulla.\r\n',
        'registered': '2015-07-22T09:06:19-03:00',
        'tags': [
            'culpa',
            'est',
            'Lorem',
            'sint',
            'esse',
            'quis',
            'do'
        ],
        'price': 206
    },
    {
        'guid': '827f1c57-eb5b-4337-ace2-c85cade25a8d',
        'title': 'Elit',
        'picture': 'https://picsum.photos/250/250',
        'company': 'ZOUNDS',
        'about': 'Sit cillum culpa proident non ipsum consequat anim laborum enim Lorem. '
            + 'Ad consectetur et duis in id non incididunt irure laborum officia est. Sunt '
            + 'nulla eiusmod non adipisicing velit esse aute veniam ea nulla veniam cupidatat'
            + ' dolor. Esse et duis do sit. Consequat amet ex anim laborum.\r\n',
        'registered': '2019-06-04T08:50:49-03:00',
        'tags': [
            'labore',
            'Lorem',
            'ea',
            'duis',
            'consectetur',
            'deserunt',
            'aute'
        ],
        'price': 203
    },
    {
        'guid': '6d1ed806-7224-4a77-abda-d2d1fc588912',
        'title': 'Adipisci',
        'picture': 'https://picsum.photos/250/250',
        'company': 'INVENTURE',
        'about': 'Et ipsum irure consequat sint adipisicing minim nostrud irure ullamco officia'
            + ' esse eu nisi. Pariatur eu minim deserunt eu aliquip fugiat minim amet dolore ea sit.'
            + ' Ex amet ea do excepteur nostrud adipisicing. Tempor fugiat irure in aliquip sit veniam '
            + 'commodo commodo nostrud ipsum ex. Lorem consectetur ut minim incididunt consequat veniam. '
            + 'Eiusmod sint est veniam reprehenderit.\r\n',
        'registered': '2015-07-12T07:48:37-03:00',
        'tags': [
            'id',
            'nostrud',
            'veniam',
            'mollit',
            'exercitation',
            'ad',
            'quis'
        ],
        'price': 163
    },
    {
        'guid': 'cef1a4f4-13aa-4adc-a528-2b79955b26b0',
        'title': 'Dignissimos',
        'picture': 'https://picsum.photos/250/250',
        'company': 'GEOSTELE',
        'about': 'Ut voluptate adipisicing enim et ipsum dolor adipisicing proident proident velit culpa '
            + 'reprehenderit. Tempor laborum ut ex mollit dolor. Consectetur ipsum nulla consectetur non'
            + ' culpa veniam nulla nostrud deserunt. Ea officia ea ea in mollit minim. Voluptate sit nisi '
            + 'ad in. Id do magna proident officia deserunt voluptate esse qui sunt aliqua Lorem reprehenderit'
            + ' elit nisi. Exercitation non velit Lorem enim duis mollit aliquip cillum aute.\r\n',
        'registered': '2014-06-10T11:56:20-03:00',
        'tags': [
            'aute',
            'esse',
            'cupidatat',
            'laborum',
            'eu',
            'adipisicing',
            'id'
        ],
        'price': 184
    },
    {
        'guid': '58ca323e-2568-494f-872e-2ce4c3991dda',
        'title': 'Doloremque',
        'picture': 'https://picsum.photos/250/250',
        'company': 'OCEANICA',
        'about': 'Laborum elit dolore cillum dolor esse ex exercitation. Nisi non reprehenderit adipisicing'
            + ' ut velit tempor excepteur incididunt sint labore pariatur magna. Ullamco fugiat deserunt minim'
            + ' reprehenderit reprehenderit nisi magna laborum veniam eu nulla commodo eu. Lorem proident nostrud '
            + 'exercitation dolor labore. Veniam esse eiusmod nisi eu id. Ipsum reprehenderit velit quis occaecat '
            + 'ipsum aliqua Lorem et.\r\n',
        'registered': '2018-07-14T01:00:03-03:00',
        'tags': [
            'aliquip',
            'quis',
            'esse',
            'et',
            'ad',
            'adipisicing',
            'sint'
        ],
        'price': 38
    },
    {
        'guid': 'dbdd4f8c-74cc-4115-ad2d-52b07adeee86',
        'title': 'Eos',
        'picture': 'https://picsum.photos/250/250',
        'company': 'GRUPOLI',
        'about': 'Id irure in proident labore ad magna minim velit irure sint reprehenderit duis sint eiusmod.'
            + ' Irure magna qui sunt excepteur et ex aliqua laborum eiusmod. Lorem dolore anim labore ut '
            + 'mollit commodo deserunt quis eu non. Quis cupidatat do nisi aliqua et enim officia quis anim '
            + 'aliqua mollit culpa pariatur.\r\n',
        'registered': '2016-07-19T06:29:52-03:00',
        'tags': [
            'ut',
            'labore',
            'nostrud',
            'velit',
            'ipsum',
            'officia',
            'magna'
        ],
        'price': 75
    },
    {
        'guid': '846ef953-50ac-4a67-869e-694cea355801',
        'title': 'Maxime',
        'picture': 'https://picsum.photos/250/250',
        'company': 'RADIANTIX',
        'about': 'Laboris ex culpa elit cillum reprehenderit amet sit. Veniam non excepteur tempor Lorem '
            + 'qui ea do anim nisi tempor ad do minim. Id qui dolore elit enim labore amet consectetur '
            + 'aliqua. Minim dolore elit ipsum laborum irure sint sit labore dolore. Labore dolor occaecat'
            + ' laboris ad Lorem reprehenderit eu magna eiusmod fugiat cillum laborum.\r\n',
        'registered': '2016-07-12T01:58:34-03:00',
        'tags': [
            'ex',
            'aliqua',
            'aliqua',
            'qui',
            'laborum',
            'ut',
            'elit'
        ],
        'price': 87
    },
    {
        'guid': '2a6cffe0-ef3b-484d-b2bb-7ba1e4490ad8',
        'title': 'Praesentium',
        'picture': 'https://picsum.photos/250/250',
        'company': 'BILLMED',
        'about': 'Consequat qui laboris aliquip qui. Ipsum nostrud magna eiusmod reprehenderit minim'
            + ' elit consectetur amet. Eiusmod excepteur pariatur anim sint ipsum amet est id dolor elit et.\r\n',
        'registered': '2016-12-21T12:58:11-02:00',
        'tags': [
            'ullamco',
            'deserunt',
            'culpa',
            'ullamco',
            'duis',
            'magna',
            'ad'
        ],
        'price': 89
    },
    {
        'guid': 'f6cdc540-ba84-4b74-85ef-d0db069d92fa',
        'title': 'Repellat',
        'picture': 'https://picsum.photos/250/250',
        'company': 'GOGOL',
        'about': 'Nulla id laborum officia tempor duis nisi. Sint tempor ex irure ipsum esse aliquip '
            + 'incididunt. Deserunt sint sunt minim irure minim minim sunt. Consequat in minim ad sit'
            + ' adipisicing elit minim in laboris proident reprehenderit mollit elit. Elit Lorem id '
            + 'laboris aliqua quis do fugiat. Quis laborum reprehenderit do minim dolore tempor nisi '
            + 'adipisicing ipsum Lorem quis duis adipisicing et. Dolore velit et enim eiusmod culpa '
            + 'laborum cillum ullamco.\r\n',
        'registered': '2014-03-25T01:07:19-02:00',
        'tags': [
            'ipsum',
            'fugiat',
            'ex',
            'ipsum',
            'amet',
            'eiusmod',
            'reprehenderit'
        ],
        'price': 57
    }
];

db.products.drop();
db.products.insertMany(products);
