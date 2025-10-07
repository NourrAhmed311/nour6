const tasks = ["water", "walk", "sleep", "veggies"];

    window.onload = () => {
      alert("Let's go, champ! Time to start your healthy day! 💪");
     
      tasks.forEach(task => {
        const saved = localStorage.getItem(task);
        if (saved === "done") {
          document.getElementById(task).classList.add("done");
        }
      });
    };

    function markDone(id) {
      const task = document.getElementById(id);
      task.classList.toggle("done");

    
      if (task.classList.contains("done")) {
        localStorage.setItem(id, "done");
      } else {
        localStorage.removeItem(id);
      }

      checkAllDone();
    }

    
    function checkAllDone() {
      const allDone = tasks.every(task =>
        document.getElementById(task).classList.contains("done")
      );
      if (allDone) {
        alert("🎉 Congratulations! You finished all your healthy tasks today! 👏");
      }
    }