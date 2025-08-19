
const review = [
    {
        id: 0,
        clientName: 'Future',
        clientLocation: 'Some Where',
        clientSource: 'Fiverr',
        clientReview: 'Abdu ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper tellus vel metus iaculis, eu feugiat orci laoreet. Morbi eget porta turpis. Vestibulum vel erat et risus lobortis faucibus. Suspendisse porttitor pellentesque elit ut euismod. Integer ac enim vel nibh condimentum commodo eu vitae mauris.'
    },
    {
        id: 2,
        clientName: 'future Client',
        clientLocation: 'Some where',
        clientSource: 'Upwork',
        clientReview: 'I know him eu feugiat nulla. Nam iaculis vestibulum ligula, ut gravida odio blandit a. Sed id nibh volutpat, mollis sapien vel, blandit ligula. Duis tortor lectus, cursus et pellentesque ac, imperdiet sit amet odio. Interdum et malesuada fames ac ante ipsum primis in faucibus.. '
    },
    {
        id: 3,
        clientName: 'future Client',
        clientLocation: 'Some where',
        clientSource: 'Upwork',
        clientReview: "Abdu is Vivamus felis nulla, tempus id dui sollicitudin, consectetur gravida augue. Nunc dictum nulla id nunc cursus, ut accumsan felis tristique. Sed et nunc eget lorem congue molestie. Phasellus sed eleifend nibh, vitae lacinia nibh. Morbi tempor dolor vel odio laoreet tincidunt. Integer risus"
    },
    {
        id: 4,
        clientName: 'Client4',
        clientLocation: 'Addis Ababa',
        clientSource: 'local campany',
        clientReview: 'I know Abdu and he is veryVivamus felis nulla, tempus id dui sollicitudin, consectetur gravida augue. Nunc dictum nulla id nunc cursus, ut accumsan felis tristique. Sed et nunc eget lorem congue molestie. Phasellus sed eleifend nibh, vitae lacinia nibh. Morbi tempor dolor vel odio laoreet tincidunt. Integer risus'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
