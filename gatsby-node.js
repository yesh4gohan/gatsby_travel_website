const path = require("path")

//const fetch = require('node-fetch');

  exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  //const response_raw = await fetch("https://sheet.best/api/sheets/51a61b8a-e12a-4701-b8bf-b909b8324d9a")

  const response = 
  [
   {
     Title: 'Kashmir Great Lakes',
     trek_banner_image: 'https://images.prismic.io/indiahike/8984f508-0053-4b04-ad01-14372310d402_DSCF4168.jpg',
     Photo_list: [
     'https://images.prismic.io/indiahike/8984f508-0053-4b04-ad01-14372310d402_DSCF4168.jpg',
     'https://images.prismic.io/indiahike/8984f508-0053-4b04-ad01-14372310d402_DSCF4168.jpg',
     'https://images.prismic.io/indiahike/8984f508-0053-4b04-ad01-14372310d402_DSCF4168.jpg'
   ],    
     Price: '₹ 13999',
     Base: 'Kashmir',
     Duration: '7 days',
     Itinerary: 'The Kashmir Great Lakes, trek is the most beautiful, amazing and full of natural beauty trek. In this trek you can enjoy thescenic beauty of God’s amazing creation called ‘Lakes’. Here you can  see 6 different Lakes named, Vishnusar, Kishansar, Gadsar,Satsar,Gangabal,Nandkol and many other small lakes . This is the totally hidden part of Kashmir. Only very few number of people is knownabout this amazing trek.',
     difficulty: 'Moderate',
     altitude: '13,800 ft',
     slug: 'kashmir-great-lakes'
   },
   {
      Title: 'Marchoi Winter Trek',
      trek_banner_image: 'https://images.prismic.io/indiahike/8984f508-0053-4b04-ad01-14372310d402_DSCF4168.jpg',
      Photo_list: [
      'https://images.prismic.io/indiahike/8984f508-0053-4b04-ad01-14372310d402_DSCF4168.jpg',
      'https://images.prismic.io/indiahike/8984f508-0053-4b04-ad01-14372310d402_DSCF4168.jpg',
      'https://images.prismic.io/indiahike/8984f508-0053-4b04-ad01-14372310d402_DSCF4168.jpg'
    ],    
      Price: '₹ 8499',
      Base: 'Naranag, Kashmir',
      Duration: '4 days',
      Itinerary: 'Firstly, exploration and acclimatization in Naranag, Secondly, trekking amidst Coniferous forest and reaching Dumail following the Wangath river. Thirdly, trekking to the Marchoi top.Fourthly, meeting Gujjars (people originally from Central Asia who settled in Gujarat in India) andtalking to them.Photography amidst natural settings.',
      difficulty: 'easy-moderate',
      altitude: '10,500 feet approx',
      slug: 'marchoi-trek'
    }
  ]
  response.forEach((node) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/tour_page_template.js"),
      context: {
        slug: node.slug,
        ...node
      },
    })
  })
}
