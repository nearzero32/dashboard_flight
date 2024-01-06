export default [
  // super_admin
  {
    title: "الصفحة الرئيسية",
    icon: "home",
    to: "/SuperAdminHome",
    type: "super_admin",
  },
  {
    title: "المراكز",
    icon: "pie-chart",
    to: "/centers",
    type: "super_admin",
  },
  {
    title: "أقتراحات الدول",
    icon: "pie-chart",
    to: "/countries",
    type: "super_admin",
  },
  {
    title: "أقتراحات المطارات",
    icon: "pie-chart",
    to: "/airportSuggestion",
    type: "super_admin",
  },
  // super_admin
  // admin
  {
    title: "الصفحة الرئيسية",
    icon: "home",
    to: "/Index",
    type: "admin",
  },
  {
    group: "",
    model: false,
    icon: "mdi-apps",
    title: "العملاء",
    type: "admin",
    children: [
      {
        title: "عرض العملاء",
        icon: "disc",
        to: "customers",
      },
      {
        title: "عرض OTP",
        icon: "disc",
        to: "otp",
      },
    ],
  },
  {
    title: "المستخدمين",
    icon: "users",
    to: "/users",
    type: "admin",
  },
  {
    title: "الأشعارات",
    icon: "bell",
    to: "/showNorifications",
    type: "admin",
  },
  {
    title: "الدول",
    icon: "compass",
    to: "/admin-countries",
    type: "admin",
  },
  {
    title: "المدن",
    icon: "slack",
    to: "/admin-cities",
    type: "admin",
  },
  {
    title: "المطارات",
    icon: "anchor",
    to: "/admin-airports",
    type: "admin",
  },
  {
    title: "الخطوط",
    icon: "sliders",
    to: "/admin-airlines",
    type: "admin",
  },
  {
    title: "الرحلات",
    icon: "refresh-cw",
    to: "/admin-flights",
    type: "admin",
  },
  {
    title: "الأعلانات",
    icon: "aperture",
    to: "/admin-ads",
    type: "admin",
  },
  {
    title: "الخدمات",
    icon: "codesandbox",
    to: "/admin-services",
    type: "admin",
  },
  // admin
  // assistance
  {
    title: "المستخدمين",
    icon: "users",
    to: "/users",
    type: "assistance",
  },
  {
    title: "الأشعارات",
    icon: "bell",
    to: "/showNorifications",
    type: "assistance",
  },
  {
    title: "الدول",
    icon: "compass",
    to: "/admin-countries",
    type: "assistance",
  },
  {
    title: "المدن",
    icon: "slack",
    to: "/admin-cities",
    type: "assistance",
  },
  {
    title: "المطارات",
    icon: "anchor",
    to: "/admin-airports",
    type: "assistance",
  },
  {
    title: "الخطوط",
    icon: "sliders",
    to: "/admin-airlines",
    type: "assistance",
  },
  {
    title: "الرحلات",
    icon: "refresh-cw",
    to: "/admin-flights",
    type: "assistance",
  },
  {
    title: "الأعلانات",
    icon: "aperture",
    to: "/admin-ads",
    type: "assistance",
  },
  {
    title: "الخدمات",
    icon: "codesandbox",
    to: "/admin-services",
    type: "assistance",
  },
  // assistance

  // { header: "Home" },
  // {
  //   title: "Analytical",
  //   icon: "pie-chart",
  //   to: "dashboards/analytical",
  //   type: "admin",
  // },
  // {
  //   title: "eCommerce",
  //   icon: "shopping-bag",
  //   to: "dashboards/ecommerce",
  // },
  // {
  //   title: "Modern",
  //   icon: "hard-drive",
  //   to: "dashboards/modern",
  // },
  // {
  //   header: "Apps",
  // },
  // {
  //   title: "Chat",
  //   icon: "message-square",
  //   to: "apps/chat",
  // },
  // {
  //   title: "Calendar",
  //   icon: "calendar",
  //   to: "apps/fullcalendar",
  // },
  // {
  //   title: "Ecommerce-Shop",
  //   icon: "shopping-cart",
  //   to: "apps/shop",
  // },
  // {
  //   title: "Contact",
  //   icon: "phone-call",
  //   to: "apps/contact",
  // },
  // {
  //   title: "Contact List",
  //   icon: "phone",
  //   to: "apps/contact-list",
  // },
  // {
  //   title: "Contact Grid",
  //   icon: "smartphone",
  //   to: "apps/contact-grid",
  // },
  // {
  //   title: "Email",
  //   icon: "mail",
  //   to: "apps/email/inbox",
  // },
  // {
  //   title: "Todo",
  //   icon: "check-square",
  //   to: "apps/todo",
  // },
  // { header: "Components" },
  // {
  //   group: "/components",
  //   model: false,
  //   icon: "mdi-apps",
  //   title: "Ui Components",
  //   children: [
  //     {
  //       title: "Alerts",
  //       icon: "disc",
  //       to: "alerts",
  //     },
  //     {
  //       title: "Avatar",
  //       icon: "disc",
  //       to: "avatar",
  //     },
  //     {
  //       title: "Badge",
  //       icon: "disc",
  //       to: "badge",
  //     },
  //     {
  //       title: "Banner",
  //       icon: "disc",
  //       to: "banner",
  //     },
  //     {
  //       title: "Appbar",
  //       icon: "disc",
  //       to: "appbar",
  //     },
  //     {
  //       title: "Toolbar",
  //       icon: "disc",
  //       to: "toolbar",
  //     },
  //     {
  //       title: "Systembar",
  //       icon: "disc",
  //       to: "systembar",
  //     },
  //     {
  //       title: "Bottom Navigation",
  //       icon: "disc",
  //       to: "bottomnavigation",
  //     },
  //     {
  //       title: "Bottomsheet",
  //       icon: "disc",
  //       to: "bottomsheet",
  //     },
  //     {
  //       title: "Breadcrumb",
  //       icon: "disc",
  //       to: "breadcrumb",
  //     },
  //     {
  //       title: "Buttons",
  //       icon: "disc",
  //       to: "buttons",
  //     },
  //     {
  //       title: "Fab",
  //       icon: "disc",
  //       to: "fab",
  //     },
  //     {
  //       title: "Cards",
  //       icon: "disc",
  //       to: "cards",
  //     },
  //     {
  //       title: "Carousel",
  //       icon: "disc",
  //       to: "carousel",
  //     },
  //     {
  //       title: "Chips",
  //       icon: "disc",
  //       to: "chips",
  //     },
  //     {
  //       title: "Dialogs",
  //       icon: "disc",
  //       to: "dialogs",
  //     },
  //     {
  //       title: "Dividers",
  //       icon: "disc",
  //       to: "dividers",
  //     },
  //     {
  //       title: "Expansion Panel",
  //       icon: "disc",
  //       to: "expansionpanel",
  //     },
  //     {
  //       title: "Footer",
  //       icon: "disc",
  //       to: "footer",
  //     },
  //     {
  //       title: "Overflow Buttons",
  //       icon: "disc",
  //       to: "overflow-buttons",
  //     },
  //     {
  //       title: "Grids",
  //       icon: "disc",
  //       to: "grids",
  //     },
  //     {
  //       title: "Button Group",
  //       icon: "disc",
  //       to: "button-group",
  //     },
  //     {
  //       title: "Chip Group",
  //       icon: "disc",
  //       to: "chip-group",
  //     },
  //     {
  //       title: "Item Group",
  //       icon: "disc",
  //       to: "item-group",
  //     },
  //     {
  //       title: "List Item Group",
  //       icon: "disc",
  //       to: "listitem-group",
  //     },
  //     {
  //       title: "Slide Group",
  //       icon: "disc",
  //       to: "slide-group",
  //     },
  //     {
  //       title: "Windows",
  //       icon: "disc",
  //       to: "windows",
  //     },
  //     {
  //       title: "Hover",
  //       icon: "disc",
  //       to: "hover",
  //     },
  //     {
  //       title: "Icons",
  //       icon: "disc",
  //       to: "icons",
  //     },
  //     {
  //       title: "Images",
  //       icon: "disc",
  //       to: "images",
  //     },

  //     {
  //       title: "Menus",
  //       icon: "disc",
  //       to: "menus",
  //     },
  //     {
  //       title: "Navigation Drawers",
  //       icon: "disc",
  //       to: "navigation-drawers",
  //     },
  //     {
  //       title: "Overlay",
  //       icon: "disc",
  //       to: "overlay",
  //     },
  //     {
  //       title: "Pagination",
  //       icon: "disc",
  //       to: "pagination",
  //     },
  //     {
  //       title: "Parallex",
  //       icon: "disc",
  //       to: "parallex",
  //     },
  //     {
  //       title: "Color Pickers",
  //       icon: "disc",
  //       to: "color-pickers",
  //     },
  //     {
  //       title: "Date Pickers",
  //       icon: "disc",
  //       to: "date-pickers",
  //     },
  //     {
  //       title: "Time Pickers",
  //       icon: "disc",
  //       to: "time-pickers",
  //     },
  //     {
  //       title: "Progress Circular",
  //       icon: "disc",
  //       to: "progress-circular",
  //     },
  //     {
  //       title: "Progress Linear",
  //       icon: "disc",
  //       to: "progress-linear",
  //     },
  //     {
  //       title: "Rating",
  //       icon: "disc",
  //       to: "rating",
  //     },
  //     {
  //       title: "Sheet",
  //       icon: "disc",
  //       to: "sheet",
  //     },
  //     {
  //       title: "SkeletonLoaders",
  //       icon: "disc",
  //       to: "skeleton-loaders",
  //     },
  //     {
  //       title: "Snackbar",
  //       icon: "disc",
  //       to: "snackbar",
  //     },
  //     {
  //       title: "Sparkline",
  //       icon: "disc",
  //       to: "sparkline",
  //     },
  //     {
  //       title: "Steppers",
  //       icon: "disc",
  //       to: "steppers",
  //     },
  //     {
  //       title: "Subheaders",
  //       icon: "disc",
  //       to: "subheaders",
  //     },
  //     {
  //       title: "Tabs",
  //       icon: "disc",
  //       to: "tabs",
  //     },
  //     {
  //       title: "Timeline",
  //       icon: "disc",
  //       to: "timeline",
  //     },
  //     {
  //       title: "Tooltips",
  //       icon: "disc",
  //       to: "tooltips",
  //     },
  //     {
  //       title: "Treeview",
  //       icon: "disc",
  //       to: "treeview",
  //     },
  //   ],
  // },
  // {
  //   group: "/style-animation",
  //   model: false,
  //   icon: "mdi-palette",
  //   title: "Style & Animation",
  //   children: [
  //     {
  //       title: "Colors",
  //       icon: "disc",
  //       to: "colors",
  //     },
  //     {
  //       title: "Content",
  //       icon: "disc",
  //       to: "content",
  //     },
  //     {
  //       title: "Display",
  //       icon: "disc",
  //       to: "display",
  //     },
  //     {
  //       title: "Elevation",
  //       icon: "disc",
  //       to: "elevation",
  //     },
  //     {
  //       title: "Flex",
  //       icon: "disc",
  //       to: "flex",
  //     },
  //     {
  //       title: "Float",
  //       icon: "disc",
  //       to: "float",
  //     },
  //     {
  //       title: "Spacing",
  //       icon: "disc",
  //       to: "spacing",
  //     },
  //     {
  //       title: "Text",
  //       icon: "disc",
  //       to: "text",
  //     },
  //     {
  //       title: "Typography",
  //       icon: "disc",
  //       to: "typography",
  //     },
  //     {
  //       title: "Transitions",
  //       icon: "disc",
  //       to: "transitions",
  //     },
  //   ],
  // },
  // { header: "Charts" },
  // {
  //   title: "ApexCharts",
  //   icon: "bar-chart-2",
  //   to: "charts/apexcharts",
  // },
  // { header: "Forms" },
  // {
  //   group: "/form-elements",
  //   model: false,
  //   icon: "mdi-flip-to-front",
  //   title: "Form Elements",
  //   children: [
  //     {
  //       title: "Autocompletes",
  //       icon: "disc",
  //       to: "feautocompletes",
  //     },
  //     {
  //       title: "Combobox",
  //       icon: "disc",
  //       to: "fecombobox",
  //     },
  //     {
  //       title: "File Inputs",
  //       icon: "disc",
  //       to: "fefileinputs",
  //     },
  //     {
  //       title: "Inputs",
  //       icon: "disc",
  //       to: "feinputs",
  //     },
  //     {
  //       title: "Overflow Buttons",
  //       icon: "disc",
  //       to: "feoverflowbuttons",
  //     },
  //     {
  //       title: "Selection Controls",
  //       icon: "disc",
  //       to: "feselectioncontrols",
  //     },
  //     {
  //       title: "Selects",
  //       icon: "disc",
  //       to: "feselects",
  //     },
  //     {
  //       title: "Sliders",
  //       icon: "disc",
  //       to: "fesliders",
  //     },
  //     {
  //       title: "Textareas",
  //       icon: "disc",
  //       to: "fetextareas",
  //     },
  //     {
  //       title: "Textfields",
  //       icon: "disc",
  //       to: "fetextfields",
  //     },
  //   ],
  // },
  // {
  //   group: "/form-layouts",
  //   model: false,
  //   icon: "mdi-checkbox-multiple-blank-outline",
  //   title: "Form Layouts",
  //   children: [
  //     {
  //       title: "Form Action",
  //       icon: "disc",
  //       to: "flformaction",
  //     },
  //     {
  //       title: "Form Basic",
  //       icon: "disc",
  //       to: "flformbasic",
  //     },
  //     {
  //       title: "Form Wizard",
  //       icon: "disc",
  //       to: "formwizard",
  //     },
  //     {
  //       title: "Form Horizontal",
  //       icon: "disc",
  //       to: "flformhorizontal",
  //     },
  //     {
  //       title: "Form Validation",
  //       icon: "disc",
  //       to: "formvalidation",
  //     },
  //   ],
  // },
  // { header: "Widgets" },
  // {
  //   title: "Drag n Drop",
  //   icon: "copy",
  //   to: "extra-components/dragndrop",
  // },
  // {
  //   title: "Lists",
  //   icon: "box",
  //   to: "components/lists",
  // },
  // { header: "Tables" },
  // {
  //   title: "Simple Table",
  //   icon: "layout",
  //   to: "tables/tablesimple",
  // },
  // {
  //   title: "Datatable",
  //   icon: "database",
  //   to: "tables/tabledatatable",
  // },
  // {
  //   title: "Data Iterators",
  //   icon: "columns",
  //   to: "tables/tabledataiterators",
  // },
  // { header: "Authentication" },
  // {
  //   title: "Boxed Login",
  //   icon: "log-in",
  //   to: "authentication/boxedlogin",
  // },
  // {
  //   title: "Login",
  //   icon: "unlock",
  //   to: "authentication/fulllogin",
  // },
  // {
  //   title: "Boxed Register",
  //   icon: "user-plus",
  //   to: "authentication/boxedregister",
  // },
  // {
  //   title: "Register",
  //   icon: "user",
  //   to: "authentication/fullregister",
  // },
  // {
  //   title: "Error",
  //   icon: "alert-triangle",
  //   to: "error",
  // },
  // { header: "Icons" },
  // {
  //   title: "Material",
  //   icon: "codesandbox",
  //   to: "icons/materialicons",
  // },
  // {
  //   title: "Font Awesome",
  //   icon: "feather",
  //   to: "icons/fontawesomeicons",
  // },
  // {
  //   title: "Themify",
  //   icon: "droplet",
  //   to: "icons/themifyicons",
  // },
  // {
  //   title: "Simple line",
  //   icon: "octagon",
  //   to: "icons/simplelineicons",
  // },

];
