
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        clifford: '#da373d',
                    }
                }
            }
        }
        
        
        function Menu(e) {
            let list = document.querySelector('ul');
            e.name === 'grid-outline' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "grid-outline", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
        }
    

        window.addEventListener('DOMContentLoaded', () => {

            let btn = document.querySelector('#btn');
            let sun = document.querySelector('#sun');
            let moon = document.querySelector('#moon');
            let dark = document.querySelector('#darkmode');

            btn.addEventListener('click', () => {

                if (sun.classList.contains('sun')) {
                    sun.classList.remove('sun');
                    sun.classList.add('hidden');
                    moon.classList.remove('hidden');
                    moon.classList.add('moon');
                    dark.classList.remove('light');
                    dark.classList.add('dark');
                } else {
                    sun.classList.remove('hidden');
                    sun.classList.add('sun');
                    moon.classList.remove('moon');
                    moon.classList.add('hidden');
                    dark.classList.remove('dark');
                    dark.classList.add('light');

                }

            });

        });