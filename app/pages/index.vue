<template>
  <div class="q-pa-lg">
    <div class="row items-center q-mb-xl">
      <div class="col-12 col-md-5">
        <q-img src="/images/hero.png" alt="Магазин Нужные вещи" class="rounded-borders" />
      </div>
      <div class="col-12 col-md-7 q-pa-xl">
        <h1 class="text-h3 text-weight-bold q-mb-md">Нужные вещи</h1>
        <p class="text-h6 text-grey-8 q-mb-lg">
          Магазин простых и стильных вещей для повседневной жизни
        </p>
        <q-btn color="primary" label="Смотреть каталог" :to="'/catalog'" size="lg" icon="shopping_bag" />
      </div>
    </div>

    <q-card class="q-mb-xl">
      <q-card-section>
        <h2 class="text-h4 text-center q-mb-md">О нашем магазине</h2>
        <q-separator class="q-mb-lg" />
        
        <div class="row q-col-gutter-lg">
          <FeatureCard 
            icon="style" 
            title="Качественные материалы"
            text="Мы используем только натуральные и долговечные материалы для наших изделий"
          />
          <FeatureCard 
            icon="local_shipping" 
            title="Быстрая доставка"
            text="Доставляем заказы по всей России в кратчайшие сроки"
          />
          <FeatureCard 
            icon="support_agent" 
            title="Поддержка 24/7"
            text="Наша команда всегда готова помочь с выбором и ответить на вопросы"
          />
        </div>
      </q-card-section>
    </q-card>

    <div class="text-center q-mb-xl">
      <h2 class="text-h4 q-mb-lg">Наши категории</h2>

      <div class="row q-col-gutter-md">
        <CategoryCard image="/images/clothing.png" title="Одежда" />
        <CategoryCard image="/images/bags.png" title="Сумки" />
        <CategoryCard image="/images/jewelry.png" title="Украшения" />
        <CategoryCard image="/images/electronics.png" title="Электроника" />
      </div>
    </div>
  </div>
</template>
