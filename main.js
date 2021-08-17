noseX = 0;
noseY = 0;
function preload()
{
clown_nose = loadImage('https://i.postimg.cc/wxR6J0R8/unnamed.png');
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', got_poses);
}

function modelLoaded()
{
    console.log("PoseNet model is loaded!!");
}

function got_poses(results)
{
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x - 15;
noseY = results[0].pose.nose.y + 8;
}
}

function draw()
{
    image(video, 0,0,300,300);
    image(clown_nose, noseX, noseY ,30 ,30)
}
function take_snapshot()
{
    save('my_filtered_img.png');
}