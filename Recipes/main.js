//  const loadMoreBtn = document.getElementById('loadMoreBtn');
//       const hiddenRecipes = document.querySelectorAll('.more-recipes');
      
//       loadMoreBtn.addEventListener('click', function() {
//         hiddenRecipes.forEach(recipe => {
//           recipe.classList.remove('hidden');
//         });
        
//         // Hide the button after loading all recipes
//         loadMoreBtn.style.display = 'none';
        
//         // Optional: Smooth scroll to first newly revealed recipe
//         const firstHidden = document.querySelector('.more-recipes');
//         if (firstHidden) {
//           firstHidden.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//         }
//       });

 const loadMoreBtn = document.getElementById('loadMoreBtn');
      const recipesPerLoad = 4;
      let currentlyShown = 4; // Start with 4 recipes visible
      
      loadMoreBtn.addEventListener('click', function() {
        const hiddenRecipes = document.querySelectorAll('.more-recipes.hidden');
        const totalRecipes = document.querySelectorAll('.more-recipes').length;
        
        // Show next 4 recipes
        for (let i = 0; i < recipesPerLoad && i < hiddenRecipes.length; i++) {
          hiddenRecipes[i].classList.remove('hidden');
          currentlyShown++;
        }
        
        // Hide button if all recipes are shown
        if (currentlyShown >= totalRecipes + 4) {
          loadMoreBtn.style.display = 'none';
        }
        
        // Smooth scroll to first newly revealed recipe
        const firstNewlyVisible = hiddenRecipes[0];
        if (firstNewlyVisible) {
          setTimeout(() => {
            firstNewlyVisible.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 100);
        }
      });