var mainApp = new Vue({
  el: '#main-app',
  data: {
    topics: [
      {
        title: "Work Things",
        missions: [
          {
            title: "Make a to-do list webapp",
            tasks: [
              {
                title: "Create first draft",
                status: "done"
              },
              {
                title: "Initialize repository",
                status: "freeze"
              },
              {
                title: "Commit base template",
                status: "next"
              }
            ]
          },
          {
            title: "Choose git hosting",
            tasks: [
              {
                title: "List top 5 git hosts",
                status: "done"
              },
              {
                title: "Compare features",
                status: "freeze"
              },
              {
                title: "Write down findings",
                status: "next"
              }
            ]
          }
        ]
      }
    ]

  },
  mounted: function () {

  },
  methods: {
    addTask: function (mission) {
      mission.tasks.push({
        title: "",
        status: "todo"
      })
    }
  },
  filters: {

  }
});

