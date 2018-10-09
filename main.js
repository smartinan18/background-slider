angular
    .module('app', [])
    .controller('imageCtrl', ImageCtrl)
    .directive('bgSlider', bgSlider)

function ImageCtrl($interval) {
    var vm = this

    vm.$onInit= activate
    // Métodos del controlador
    vm.changeImage = changeImage
 
    function activate() {
        vm.arrayImages = vm.images.split(',')
        vm.actualImage = 0
        vm.interval = $interval(refreshImage, 5000)
    }
    
    function changeImage(imageNumber) {
        vm.actualImage = imageNumber
        $interval.cancel(vm.interval)
        vm.interval = $interval(refreshImage, 5000)
    }

    function refreshImage() {
        if (vm.actualImage == vm.arrayImages.length - 1) {
            vm.actualImage = 0
        } else {
            vm.actualImage++
        }
    }
}

function bgSlider() {
    return {
        scope: {
            images: '@'
        },
        bindToController: true,
        controller: ImageCtrl,
        controllerAs: 'vm',
        templateUrl: 'templates/bg-slider/bg-slider.html'
    }
}