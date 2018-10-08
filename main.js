angular
    .module('app', [])
    .controller('imageCtrl', ImageCtrl)
    .directive('bgSlider', bgSlider)

function ImageCtrl($interval) {
    var vm = this
    vm.images = [
        'images/pic1.jpg',
        'images/pic2.jpg',
        'images/pic3.jpg',
        'images/pic4.jpg',
        'images/pic5.jpg',
        'images/xesmar-bg.jpg'
    ]
    vm.actualImage = 0
    vm.style = {
        'background-image': 'url(' + vm.images[vm.actualImage] + ')'
    }
    vm.button = [
        'active',
        'inactive',
        'inactive',
        'inactive',
        'inactive',
        'inactive'
    ]
    vm.changeImage = function (imageNumber) {
        vm.style['background-image'] = 'url(' + vm.images[imageNumber] + ')'
        vm.button[vm.actualImage] = 'inactive'
        vm.actualImage = imageNumber
        vm.button[vm.actualImage] = 'active'
        $interval.cancel(vm.interval)
        vm.interval = $interval(refreshImage, 5000)
    }

    vm.interval = $interval(refreshImage, 5000)

    function refreshImage() {
        if (vm.actualImage == vm.images.length - 1) {
            vm.actualImage = 0
            vm.button[vm.images.length - 1] = 'inactive'
        } else {
            vm.actualImage++
            vm.button[vm.actualImage-1] = 'inactive'
        }
        //Sin importar el valor al que cambie la variable, actualizamos el valor en el estilo
        vm.style['background-image'] = 'url(' + vm.images[vm.actualImage] + ')'
        vm.button[vm.actualImage] = 'active'
    }
}

function bgSlider() {
    return {
        bindToController: {
            actualImage: '=?',
            images: '=?',
            style: '=?',
            changeImage: '=?',
            state: '=?'
        },
        controller: ImageCtrl,
        controllesAs: 'slider',
        template: [
            `<div style="position: absolute;
                height: 100%;
                width: 100%;
                background-image: url({{vm.images[vm.actualImage]}});
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                background-attachment: scroll;
                background-color: #808080;
                transition: background-image 0.5s ease-in-out">
                <div class="buttons">
                    <div class="button {{vm.button[0]}}" ng-click="vm.changeImage(0)"></div>
                    <div class="button {{vm.button[1]}}" ng-click="vm.changeImage(1)"></div>
                    <div class="button {{vm.button[2]}}" ng-click="vm.changeImage(2)"></div>
                    <div class="button {{vm.button[3]}}" ng-click="vm.changeImage(3)"></div>
                    <div class="button {{vm.button[4]}}" ng-click="vm.changeImage(4)"></div>
                    <div class="button {{vm.button[5]}}" ng-click="vm.changeImage(5)"></div>
                </div>
            </div>`
        ]
    }
}

document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(document, ['app'])
})

//otras cosas en sucio van aqui

// .component('bg-slider', {
//     bindings: {
//     },
//     controller: function () {
//         function style() {
//             return {
//                 'background-image': 'url(' + this.images[this.actualImage] + ')'
//             }
//         }
//         this.style = style
//     },
//     template: [
//         '<div class="slideshow" ng-style="$ctrl.style">',
//         '<h1>test</h1>',
//         '</div>'
//     ].join('')
// })