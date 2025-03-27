const handleConfirm = async () => {
    console.log("Selected Item:", selectedItem);
    console.log("Gem Value:", selectedItem.gemValue);

    const payload = {
      ITEM_TYPE: selectedItem.itemType,
      PRICE_GEM: 0,
      PRICE_EXP: 0,
      RARITY: 10 / 100, // แปลงเปอร์เซ็นต์เป็นทศนิยม
      GEM_REWARD: selectedItem.gemValue || 10, // ใช้ gemValue จาก selectedItem
      ...(selectedItem.itemType === 'exp_boost' && {
        BOOST_PERCENTAGE: selectedItem.boostPercentage || 0,
        BOOST_DAYS: selectedItem.boostDays || 0,
      })
    };

    console.log("Payload:", payload);

    const token = localStorage.getItem("accessToken");
    console.log("Token:", token);
    try {
      const response = await fetch("http://localhost:3000/shop/mystery-box/test", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      console.log("Success:", result);

      setIsRandomBoxModalOpen(false); // ปิด modal เมื่อสำเร็จ
    } catch (error) {
      console.error("Error:", error);
    }
  };
