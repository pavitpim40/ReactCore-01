const products = [
    {
        id: 1,
        product_name: 'Mudslide',
        price: '$0.75',
        descriptio:
            'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
        gender: 'Female',
        ip_address: '68.84.237.147',
    },
    {
        id: 2,
        product_name: 'Trout - Hot Smkd, Dbl Fillet',
        price: '$8.27',
        descriptio:
            'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
        gender: 'Female',
        ip_address: '30.199.120.132',
    },
    {
        id: 3,
        product_name: 'Wine - Black Tower Qr',
        price: '$4.18',
        descriptio: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        gender: 'Male',
        ip_address: '102.142.15.6',
    },
    {
        id: 4,
        product_name: 'Stock - Beef, White',
        price: '$7.43',
        descriptio:
            'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        gender: 'Male',
        ip_address: '134.127.197.30',
    },
    {
        id: 5,
        product_name: 'Beef - Rib Eye Aaa',
        price: '$7.25',
        descriptio:
            'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
        gender: 'Female',
        ip_address: '193.205.108.212',
    },
    {
        id: 6,
        product_name: 'Butter - Unsalted',
        price: '$2.91',
        descriptio: 'Vivamus tortor.',
        gender: 'Female',
        ip_address: '181.212.11.107',
    },
    {
        id: 7,
        product_name: 'Beans - Soya Bean',
        price: '$7.19',
        descriptio: 'Aenean fermentum.',
        gender: 'Female',
        ip_address: '101.165.86.79',
    },
    {
        id: 8,
        product_name: 'Sauce - Oyster',
        price: '$3.14',
        descriptio:
            'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
        gender: 'Male',
        ip_address: '200.1.89.254',
    },
    {
        id: 9,
        product_name: 'Lamb - Rack',
        price: '$1.22',
        descriptio:
            'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
        gender: 'Female',
        ip_address: '57.217.1.211',
    },
    {
        id: 10,
        product_name: 'Pear - Prickly',
        price: '$6.75',
        descriptio:
            'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
        gender: 'Male',
        ip_address: '249.194.3.112',
    },
    {
        id: 11,
        product_name: 'Wine - Duboeuf Beaujolais',
        price: '$1.89',
        descriptio:
            'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        gender: 'Male',
        ip_address: '214.245.14.89',
    },
    {
        id: 12,
        product_name: 'Tea - Darjeeling, Azzura',
        price: '$6.31',
        descriptio: 'Proin risus. Praesent lectus.',
        gender: 'Male',
        ip_address: '36.8.61.239',
    },
    {
        id: 13,
        product_name: 'Wine - Wyndham Estate Bin 777',
        price: '$4.89',
        descriptio:
            'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
        gender: 'Male',
        ip_address: '59.31.11.6',
    },
    {
        id: 14,
        product_name: 'Silicone Parch. 16.3x24.3',
        price: '$8.24',
        descriptio:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
        gender: 'Female',
        ip_address: '227.143.152.16',
    },
    {
        id: 15,
        product_name: 'Jolt Cola - Red Eye',
        price: '$0.24',
        descriptio:
            'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
        gender: 'Female',
        ip_address: '37.50.203.240',
    },
    {
        id: 16,
        product_name: 'Carbonated Water - Lemon Lime',
        price: '$9.48',
        descriptio:
            'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
        gender: 'Male',
        ip_address: '144.26.90.156',
    },
    {
        id: 17,
        product_name: 'Rice - Brown',
        price: '$8.82',
        descriptio:
            'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
        gender: 'Female',
        ip_address: '42.2.236.52',
    },
    {
        id: 18,
        product_name: 'Long Island Ice Tea',
        price: '$8.18',
        descriptio:
            'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        gender: 'Male',
        ip_address: '162.173.232.214',
    },
    {
        id: 19,
        product_name: 'Venison - Racks Frenched',
        price: '$8.85',
        descriptio:
            'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        gender: 'Male',
        ip_address: '111.214.133.78',
    },
    {
        id: 20,
        product_name: 'Coriander - Seed',
        price: '$3.29',
        descriptio:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
        gender: 'Male',
        ip_address: '75.220.248.248',
    },
    {
        id: 21,
        product_name: 'Molasses - Fancy',
        price: '$0.20',
        descriptio:
            'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        gender: 'Male',
        ip_address: '14.93.115.7',
    },
    {
        id: 22,
        product_name: 'Sauce - Cranberry',
        price: '$0.57',
        descriptio:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
        gender: 'Female',
        ip_address: '61.254.11.172',
    },
    {
        id: 23,
        product_name: 'Cherries - Fresh',
        price: '$1.68',
        descriptio: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
        gender: 'Female',
        ip_address: '219.163.4.15',
    },
    {
        id: 24,
        product_name: 'Wine - Taylors Reserve',
        price: '$2.04',
        descriptio:
            'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
        gender: 'Female',
        ip_address: '158.170.80.132',
    },
    {
        id: 25,
        product_name: 'Cheese - Gorgonzola',
        price: '$3.19',
        descriptio:
            'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
        gender: 'Polygender',
        ip_address: '202.251.132.93',
    },
    {
        id: 26,
        product_name: 'Iced Tea Concentrate',
        price: '$0.21',
        descriptio:
            'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
        gender: 'Female',
        ip_address: '16.235.32.16',
    },
    {
        id: 27,
        product_name: 'Lemonade - Pineapple Passion',
        price: '$0.35',
        descriptio: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
        gender: 'Male',
        ip_address: '62.124.11.102',
    },
    {
        id: 28,
        product_name: 'Mackerel Whole Fresh',
        price: '$9.85',
        descriptio:
            'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        gender: 'Female',
        ip_address: '126.97.58.202',
    },
    {
        id: 29,
        product_name: 'Spice - Greek 1 Step',
        price: '$6.88',
        descriptio:
            'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        gender: 'Female',
        ip_address: '200.163.7.172',
    },
    {
        id: 30,
        product_name: 'Chicken - Wieners',
        price: '$5.60',
        descriptio: 'Aliquam non mauris. Morbi non lectus.',
        gender: 'Genderfluid',
        ip_address: '226.44.254.16',
    },
];

// #1 Write Your Function Component

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<h1>Hello React</h1>);
