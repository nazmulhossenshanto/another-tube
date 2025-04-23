// load categories from api
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(response => response.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}
loadCategories();
// display categories to the browser
const displayCategories = (data) => {
    const categoryContainer = document.getElementById('category-container');
    data.forEach(item => {
        const button = document.createElement("button");
        button.classList = 'btn mr-5';
        button.innerText = item.category;
        categoryContainer.append(button);
    });
};
// load videos from api
const loadVideos = () => {
    fetch(' https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(response => response.json())
        .then(data => displayVideos(data.videos))
        .catch(error => console.log(error))
}
loadVideos();
// demo for videos
/**{category_id: '1003', video_id: 'aaae', thumbnail: 'https://i.ibb.co/Yc4p5gD/inside-amy.jpg', title: 'Inside Amy Schumer', authors: Array(1), …}
authors
: [{…}]
category_id: "1003"
description: 
others: 
{views: '3.6K', posted_date: '15147'}
thumbnail: "https://i.ibb.co/Yc4p5gD/inside-amy.jpg"
title: "Inside Amy Schumer"
video_id: "aaae"
 * 
 * 
 */
// display videos to the browser
const displayVideos = (videos) => {
    console.log(videos);
    const videoContainer = document.getElementById('videos');
    videos.forEach(video => {
        console.log(video)
        const card = document.createElement('div');
        card.innerHTML = ` 
               <figure>
    <img
      src=${video.thumbnail}/>
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
             `
        videoContainer.append(card);

    }

    )
}
