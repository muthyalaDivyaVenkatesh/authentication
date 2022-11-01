export const menuItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Pets',
        url: 'pets',
        submenu: [
        {
            title: 'dogs',
            url: 'dogs'     
        },{
            title: 'cats',
            url: 'cats'
        },{
            title: 'others',
            url: 'others'
        }]
    },
    {
        title:'Food',
        url: 'food',
        submenu:[
            {
                title: 'DogFood',
                url: 'dogfood'
            },
            {
                title: 'CatFood',
                url: 'catfood'
            },
            {
                title: 'OtherFood',
                url: 'otherfood'
            }
        ]
    },

    {
        title: 'pet Accessories',
        url: 'petaccessories',
        submenu: [
            {
                title: 'chains',
                url: 'chains'
            },
            {
                title: 'nameBadges',
                url: 'namebadge'
            },
            {
                title: 'sleepingkits',
                url: 'sleepingkit'
            }
        ]
    }
]