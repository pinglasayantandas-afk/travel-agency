


const destinations = [
    { 
      name: "Bali", 
      rating: 4.8, 
      label: "Tegallalalang Rice Terraces", 
      price: "$4,200", 
      heroImg: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80", 
      subtitle: "Tropical serenity in the heart of Indonesia",
      description: "Bali, the Island of the Gods, offers unparalleled tropical luxury. Immerse yourself in the lush rice terraces of Ubud, witness breathtaking sunsets at Uluwatu Temple, and surrender to world-class Balinese spa treatments. This 7-day journey includes private villa stays, gourmet farm-to-table dining, and exclusive cultural experiences with local artisans. Perfect for couples seeking romance or solo travelers craving spiritual renewal.",
      gallery: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        "data:image/jpeg;base64,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",
        "https://ik.imagekit.io/tvlk/blog/2024/07/shutterstock_2324082951.jpg",
        "https://t4.ftcdn.net/jpg/03/99/76/67/360_F_399766792_yo0SPBzuwGqDpdJQ8eAYqGrIeackWI8L.jpg"
      ],
      itinerary: ["Ubud Rice Terraces", "Uluwatu Temple Sunset", "Traditional Balinese Spa"] 
    },



    { 
      name: "Iceland", 
      rating: 4.9, 
      label: "Blue Lagoon & Northern Lights", 
      price: "$6,100", 
      heroImg: "https://images.unsplash.com/photo-1520529986992-d4ce365fcfc9?auto=format&fit=crop&w=800&q=80", 
      subtitle: "Geothermal wonders and glacial adventures",
      description: "Experience the raw majesty of Iceland's otherworldly landscapes. Soak in the geothermal waters of the Blue Lagoon, chase the ethereal Northern Lights, and explore the Golden Circle's natural wonders. This 8-day expedition includes private hot spring tours, glacier helicopter landings, and stays in glass-domed cabins under the stars. Ideal for adventure seekers and nature photographers.",
      gallery: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
        "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/02/15094015/kirkjufell.jpeg",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
      ],
      itinerary: ["The Blue Lagoon", "Golden Circle Tour", "Aurora Borealis Hunt"] 
    },
    { 
      name: "Rajasthan", 
      rating: 4.7, 
      label: "Hawa Mahal, Jaipur", 
      price: "$5,400", 
      heroImg: "https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?auto=format&fit=crop&w=800&q=80", 
      subtitle: "Royal heritage and desert majesty",
      description: "Step into the golden age of Indian royalty in Rajasthan. Explore majestic forts of Jaipur, cruise the romantic lakes of Udaipur, and wander the blue streets of Jodhpur. This 9-day royal journey features palace stays, private elephant safaris, and candlelit dinners in 17th-century havelis. Perfect for history lovers and culture enthusiasts seeking authentic Indian luxury.",
      gallery: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f9/rajasthan.jpg?w=600&h=500&s=1",
        "https://storage.googleapis.com/stateless-www-justwravel-com/2018/02/Amer_Fort.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSn8ljdvXT1ICBXSAAzoAMDup-JsPeHUZkQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFMGaxiAqTUotlh6Zi21fMRvmlIoKFGN5-g&s"
      ],
      itinerary: ["Amber Fort Visit", "Udaipur Lake Palace", "Jodhpur Blue City Walk"] 
    },
    { 
      name: "Patagonia", 
      rating: 5.0, 
      label: "Fitz Roy Peak", 
      price: "$7,250", 
      heroImg: "https://i.ytimg.com/vi/5FVhJa-xwIQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLATKjywdaJ-Pyh4Msn8sXQqEQp2FQ", 
      subtitle: "Wild landscapes at the edge of the world",
      description: "Venture to the end of the world where dramatic peaks meet turquoise glaciers. Trek beneath the iconic Fitz Roy, explore Torres del Paine National Park, and enjoy luxury glamping under Patagonian stars. This 10-day expedition includes private guided hikes, ice trekking adventures, and gourmet meals prepared by Patagonian chefs. For the ultimate wilderness luxury experience.",
      gallery: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        "https://www.geoex.com/_next/image?url=https%3A%2F%2Fkxn3vdktxmez55pl.public.blob.vercel-storage.com%2FHero_Patagonia_Mount%2520Fitz%2520Roy_AdobeStock_214440981.jpg&w=2048&q=85"
      ],
      itinerary: ["Ice Trekking", "Torres del Paine Hike", "Luxury Glamping"] 
    },
    { 
      name: "Kyoto", 
      rating: 4.9, 
      label: "Arashiyama Bamboo Grove", 
      price: "$5,800", 
      heroImg: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80", 
      subtitle: "Timeless traditions and zen gardens",
      description: "Discover Japan's cultural heart in Kyoto, where ancient traditions meet modern elegance. Walk through mystical bamboo forests, visit golden pavilions, and participate in exclusive tea ceremonies. This 7-day cultural immersion includes ryokan stays, private geisha performances, and kaiseki dining experiences. Perfect for those seeking spiritual tranquility and cultural depth.",
      gallery: [
        "https://cdn.craft.cloud/101e4579-0e19-46b6-95c6-7eb27e4afc41/assets/uploads/Guides/kyoto-japan-frommers.jpg",
        "https://i0.wp.com/www.touristjapan.com/wp-content/uploads/2025/01/Kiyomizu-dera-kyoto-japan-vacation-scaled.jpg?fit=2560%2C1706&ssl=1",
        "https://www.emmasedition.com/wp-content/uploads/2019/08/Things-to-do-in-Kyoto-Your-First-Time-Arashiyama-Bamboo-Grove-1--1440x1991.jpg",
        "https://m.ahstatic.com/is/image/accorhotels/Japan-Kyoto-Landmark-Couple-2023?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&qlt=80"
      ],
      itinerary: ["Bamboo Grove Walk", "Kinkaku-ji Gold Pavilion", "Tea Ceremony Experience"] 
    },
    { 
      name: "Amalfi Coast", 
      rating: 4.8, 
      label: "Positano Cliffs", 
      price: "$6,400", 
      heroImg: "https://images.unsplash.com/photo-1533903345306-15d1c30952de?auto=format&fit=crop&w=800&q=80", 
      subtitle: "Azure waters and Mediterranean luxury",
      description: "Experience la dolce vita along Italy's most dramatic coastline. Sail private yachts to hidden coves, hike the Path of the Gods, and dine in Michelin-starred cliffside restaurants. This 8-day Mediterranean escape includes stays in boutique hotels carved into cliffs, cooking classes with local chefs, and bespoke wine tastings. Perfect for foodies and romance seekers.",
      gallery: [
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAmkVSbh4j1B1Gr3YPS1MzNNogAtUQcdErQ&s",
        "https://images.squarespace-cdn.com/content/v1/62681a0c1b9b025bc7d3d1cb/1651418824279-V1KN3BLDV2LT7AVDQP3Y/52883b7e-ef20-438a-bc38-4859ca0246ba.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-wNlUOyWCVa995VUtpnboIrTwo3_-9PHzg&s"
      ],
      itinerary: ["Path of the Gods Hike", "Capri Private Boat Tour", "Positano Fine Dining"] 
    }
  ];

  const experiences = [
    { title: "Safari Camps", img: "data:image/jpeg;base64,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" },
    { title: "Air Escapes", img: "https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=600&q=80" },
    { title: "Island Villas", img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80" }
  ];

  const safetyData = {
    "New York": { score: 75, emergency: "911", lat: 40.7128, lng: -74.0060, color: "yellow" },
    "London": { score: 85, emergency: "999", lat: 51.5074, lng: -0.1278, color: "green" },
    "Tokyo": { score: 92, emergency: "110", lat: 35.6895, lng: 139.6917, color: "green" },
    "Paris": { score: 68, emergency: "112", lat: 48.8566, lng: 2.3522, color: "yellow" },
    "Dubai": { score: 88, emergency: "999", lat: 25.2048, lng: 55.2708, color: "green" },
    "Singapore": { score: 95, emergency: "999", lat: 1.3521, lng: 103.8198, color: "green" },
    "Mumbai": { score: 62, emergency: "100", lat: 19.0760, lng: 72.8777, color: "yellow" }
  };

  let activeDest = "";
  let currentLocation = null;
  let safetyMap;
  let currentSafetyInfo = null;
  let userMarker = null;
  let currentCalc = "";
  let totalExp = 0;

  function init() {
    renderDestinations();
    renderExperiences();
    initToolkitContent();
    initSafetyMap();
    setupSearch();
  }

  
  function setupSearch() {
    document.getElementById('searchBtn').onclick = function () {
      const searchTerm = document.getElementById('searchInput').value.toLowerCase();

      if (searchTerm) {
        const filtered = destinations.filter(dest =>
          dest.name.toLowerCase().includes(searchTerm)
        );

        if (filtered.length > 0) {
          showDestination(filtered[0].name);
        } else {
          alert('No destinations found.');
        }
      } else {
        alert('Please enter destination');
      }
    };

    document.getElementById('searchInput').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        document.getElementById('searchBtn').click();
      }
    });
  }

  
  window.openTool = function (toolName, element = null) {
    document.querySelectorAll('.toolkit-card').forEach(card => {
      card.classList.remove('active');
    });

    const clickedCard = element || event.currentTarget;
    clickedCard.classList.add('active');

    document.getElementById('selectedDateDisplay').innerText = 
      `Active Tool: ${toolName.charAt(0).toUpperCase() + toolName.slice(1)}`;
  };

  function initToolkitContent() {
    
    document.getElementById('tool-calendar-content').innerHTML = `
      <div class="max-w-md mx-auto">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-bold">May 2026</h3>
        </div>

        <div class="grid grid-cols-7 gap-2 text-center text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
          <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
        </div>

        <div id="calendar-grid" class="grid grid-cols-7 gap-2"></div>
      </div>
    `;

    initCalendar();

    
    document.getElementById('tool-todo-content').innerHTML = `
      <div class="space-y-4">
        <div class="flex gap-3">
          <input type="text" id="todo-input" placeholder="Add task..." class="flex-1 p-3 border rounded-xl">
          <button onclick="addTodo()" class="bg-blue-600 text-white px-6 py-3 rounded-xl">Add</button>
        </div>

        <ul id="todo-list" class="space-y-2"></ul>
      </div>
    `;

    
    document.getElementById('tool-calculator-content').innerHTML = `
      <div class="space-y-4">
        <input type="text" id="calc-display" value="0"
          class="w-full p-4 text-2xl border rounded-xl text-right" readonly>

        <div class="grid grid-cols-4 gap-3">
          ${['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+']
            .map(btn => `
              <button onclick="calc('${btn}')"
                class="p-4 bg-gray-100 rounded-xl hover:bg-gray-200">
                ${btn}
              </button>
            `).join('')}
        </div>

        <button onclick="calc('C')"
          class="w-full bg-red-500 text-white p-3 rounded-xl">
          Clear
        </button>
      </div>
    `;

    
    document.getElementById('tool-currency-content').innerHTML = `
      <div class="space-y-4">
        <input type="number" id="cur-amount"
          placeholder="Enter USD amount"
          class="w-full p-4 border rounded-xl"
          oninput="convert()">

        <div class="bg-gray-100 p-4 rounded-xl">
          <div class="text-lg font-bold" id="cur-eur">€0.00</div>
          <div class="text-lg font-bold mt-2" id="cur-inr">₹0.00</div>
        </div>
      </div>
    `;

    // EXPENSE - ALWAYS VISIBLE
    document.getElementById('tool-expense-content').innerHTML = `
      <div class="space-y-4">
        <div class="flex gap-2">
          <input type="text" id="exp-name" placeholder="Item"
            class="flex-1 p-3 border rounded-xl">

          <input type="number" id="exp-amt" placeholder="Amount"
            class="w-32 p-3 border rounded-xl">

          <button onclick="addExpense()"
            class="bg-orange-500 text-white px-5 rounded-xl">
            Add
          </button>
        </div>

        <table class="w-full">
          <tbody id="exp-list"></tbody>
        </table>

        <div class="text-right text-2xl font-bold text-orange-600"
          id="exp-total">
          $0
        </div>
      </div>
    `;

    
    document.getElementById('safety-toolkit').innerHTML = `
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-4">Safety System</h3>

        <div id="current-city-toolkit" class="text-xl mb-4">
          Detect your location
        </div>

        <div id="safety-score-toolkit"
          class="safety-score yellow">
          --
        </div>

        <button onclick="detectLocation()"
          class="mt-6 bg-teal-600 text-white px-6 py-4 rounded-xl font-bold">
          Detect Location
        </button>

        <button onclick="emergencySOS()"
          class="emergency-btn w-full mt-4">
          Emergency SOS
          <span id="emergency-number-toolkit">--</span>
        </button>
      </div>
    `;
  }

  
  function initCalendar() {
    const grid = document.getElementById('calendar-grid');
    if (!grid) return;

    grid.innerHTML = "";

    for (let i = 1; i <= 31; i++) {
      const dayEl = document.createElement('div');
      dayEl.innerText = i;
      dayEl.className =
        "calendar-day p-3 rounded-xl border text-center bg-white";

      if (i === 10) {
        dayEl.classList.add('selected');
      }

      dayEl.onclick = () => {
        document.querySelectorAll('.calendar-day')
          .forEach(el => el.classList.remove('selected'));

        dayEl.classList.add('selected');

        document.getElementById('selectedDateDisplay').innerText =
          `Travel Date Set: May ${i}, 2026`;
      };

      grid.appendChild(dayEl);
    }
  }

  
  window.addTodo = function () {
    const input = document.getElementById('todo-input');

    if (!input.value.trim()) return;

    const li = document.createElement('li');
    li.className =
      "bg-white p-3 rounded-xl flex items-center justify-between shadow";

    li.innerHTML = `
      <span>${input.value}</span>

      <button onclick="this.parentElement.remove()"
        class="text-red-500">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;

    document.getElementById('todo-list').appendChild(li);

    input.value = "";
  };


  window.calc = function (val) {
    const display = document.getElementById('calc-display');

    if (val === 'C') {
      currentCalc = "";
      display.value = "0";
      return;
    }

    if (val === '=') {
      try {
        currentCalc = eval(currentCalc).toString();
      } catch {
        currentCalc = "Error";
      }
      display.value = currentCalc;
      return;
    }

    currentCalc += val;
    display.value = currentCalc;
  };

 
  window.convert = function () {
    const amount =
      parseFloat(document.getElementById('cur-amount').value) || 0;

    document.getElementById('cur-eur').innerText =
      `€ ${(amount * 0.92).toFixed(2)}`;

    document.getElementById('cur-inr').innerText =
      `₹ ${(amount * 83.30).toFixed(2)}`;
  };

 
  window.addExpense = function () {
    const name = document.getElementById('exp-name').value;
    const amt = parseFloat(document.getElementById('exp-amt').value);

    if (!name || !amt) return;

    totalExp += amt;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="p-3 border-b">${name}</td>
      <td class="p-3 border-b text-right">$${amt.toFixed(2)}</td>
    `;

    document.getElementById('exp-list').appendChild(row);

    document.getElementById('exp-total').innerText =
      `$${totalExp.toFixed(2)}`;

    document.getElementById('exp-name').value = "";
    document.getElementById('exp-amt').value = "";
  };

 
  function initSafetyMap() {
    safetyMap = L.map('safetyMap').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(safetyMap);

    Object.entries(safetyData).forEach(([city, data]) => {
      const color =
        data.color === 'green'
          ? 'green'
          : data.color === 'yellow'
            ? 'orange'
            : 'red';

      L.circleMarker([data.lat, data.lng], {
        radius: 10,
        fillColor: color,
        color: '#fff',
        weight: 2,
        fillOpacity: 0.8
      })
      .addTo(safetyMap)
      .bindPopup(`<b>${city}</b><br>Safety Score: ${data.score}`);
    });
  }

 
  window.detectLocation = function () {
    if (!navigator.geolocation) {
      alert('Geolocation not supported');
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      currentLocation = { lat, lng };

      const safetyInfo = await mockSafetyAPI(lat, lng);

      currentSafetyInfo = safetyInfo;

      updateAllSafetyDisplays(safetyInfo);

      updateMapMarker(lat, lng, safetyInfo);

      updateNearbySafePlaces(lat, lng);

    }, () => {
      alert('Unable to fetch location');
    });
  };

  async function mockSafetyAPI(lat, lng) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      city: "Your Location",
      score: Math.floor(Math.random() * 20) + 75,
      emergency: "112",
      color: "green"
    };
  }

  function updateAllSafetyDisplays(safetyInfo) {
    document.getElementById('current-city-toolkit').innerText =
      safetyInfo.city;

    document.getElementById('safety-score-toolkit').innerText =
      safetyInfo.score;

    document.getElementById('emergency-number-toolkit').innerText =
      safetyInfo.emergency;

    document.getElementById('current-location').innerText =
      safetyInfo.city;

    document.getElementById('current-safety-score').innerText =
      safetyInfo.score;

    document.getElementById('emergency-number-map').innerText =
      safetyInfo.emergency;

    document.getElementById('safety-advice').innerText =
      `Safety Score: ${safetyInfo.score}/100`;
  }

  
  function updateNearbySafePlaces(lat, lng) {
    const nearbyPlaces = [
      {
        name: "Nearest Police Station",
        distance: "1.2 km",
        safety: 95
      },
      {
        name: "Safe Hotel Zone",
        distance: "2.5 km",
        safety: 90
      },
      {
        name: "Tourist Help Center",
        distance: "3.1 km",
        safety: 93
      }
    ];

    const list = document.getElementById('safe-places-list');

    list.innerHTML = nearbyPlaces.map(place => `
      <div class="p-4 bg-green-50 rounded-xl border border-green-200">
        <div class="flex items-center justify-between">
          <div>
            <h4 class="font-bold">${place.name}</h4>
            <p class="text-sm text-gray-500">${place.distance} away</p>
          </div>

          <div class="bg-green-500 text-white px-3 py-2 rounded-xl font-bold">
            ${place.safety}
          </div>
        </div>
      </div>
    `).join('');
  }

  function updateMapMarker(lat, lng, safetyInfo) {
    if (userMarker) {
      safetyMap.removeLayer(userMarker);
    }

    userMarker = L.marker([lat, lng])
      .addTo(safetyMap)
      .bindPopup(`
        <b>Your Location</b><br>
        Safety Score: ${safetyInfo.score}
      `)
      .openPopup();

    safetyMap.setView([lat, lng], 13);
  }

  
  window.emergencySOS = function () {
    if (currentSafetyInfo) {
      window.location.href =
        `tel:${currentSafetyInfo.emergency}`;
    } else {
      alert('Please detect location first');
    }
  };

  
  function renderDestinations() {
    const container = document.getElementById("destinations");

    container.innerHTML = destinations.map(dest => `
      <div class="bg-white rounded-3xl overflow-hidden card-hover shadow-md cursor-pointer"
        onclick="showDestination('${dest.name}')">

        <img src="${dest.heroImg}"
          class="h-64 w-full object-cover">

        <div class="p-6">
          <div class="text-yellow-400 mb-2">
            ⭐ ${dest.rating}
          </div>

          <h3 class="text-2xl font-semibold mb-1">
            ${dest.name}
          </h3>

          <p class="text-gray-500 text-sm mb-4">
            ${dest.label}
          </p>

          <div class="flex justify-between items-center">
            <span class="text-teal-600 font-bold">
              ${dest.price}
            </span>

            <button class="bg-gray-900 text-white px-4 py-2 rounded-xl text-sm">
              Explore
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderExperiences() {
    const container = document.getElementById("experiences");

    container.innerHTML = experiences.map(exp => `
      <div class="bg-gray-800 rounded-3xl overflow-hidden">
        <img src="${exp.img}"
          class="h-64 w-full object-cover">

        <h3 class="p-6 text-xl font-bold text-white">
          ${exp.title}
        </h3>
      </div>
    `).join('');
  }

  
  window.showDestination = function (name) {
    const dest = destinations.find(d => d.name === name);

    activeDest = dest.name;

    
    document.getElementById('destHero').style.backgroundImage =
      `url(${dest.heroImg})`;

    document.getElementById('destTitle').innerText =
      dest.name;

    document.getElementById('destSubtitle').innerText =
      dest.subtitle;

    
    document.getElementById('destDescription').innerText =
      dest.description;

    
    document.getElementById('destGallery').innerHTML =
      dest.gallery.map(img => `<img src="${img}" alt="${dest.name}" loading="lazy">`).join('');

    
    document.getElementById('bookingPrice').innerText =
      dest.price;

    
    document.getElementById('itinerary').innerHTML =
      dest.itinerary.map(i => `
        <div class="bg-gray-50 p-4 rounded-xl">
          ${i}
        </div>
      `).join('');

    
    document.getElementById('destinationPage')
      .classList.remove('hidden');

    document.body.style.overflow = 'hidden';
  };

  document.getElementById('backBtn').onclick = () => {
    document.getElementById('destinationPage')
      .classList.add('hidden');

    document.body.style.overflow = 'auto';
  };

  
  window.openBookingModal = function () {
    document.getElementById('modalDestName').innerText =
      `Trip to ${activeDest}`;

    document.getElementById('bookingModal')
      .classList.remove('hidden');
  };

  window.closeBookingModal = function () {
    document.getElementById('bookingModal')
      .classList.add('hidden');
  };

  window.submitBooking = function (e) {
    e.preventDefault();

    alert(`Booking confirmed for ${activeDest}!`);

    closeBookingModal();
  };

  
  window.onload = init;