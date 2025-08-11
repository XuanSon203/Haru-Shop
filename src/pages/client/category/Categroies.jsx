import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryItem from './CategoryItem';

function Categroies() {
  const categories = [
    {
      name: 'Mèo',
      image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=800&auto=format&fit=crop',
      itemsCount: 128,
      description: 'Giống mèo, phụ kiện, cát vệ sinh'
    },
    {
      name: 'Chó',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=800&auto=format&fit=crop',
      itemsCount: 142,
      description: 'Giống chó, vòng cổ, đồ chơi'
    },
    {
      name: 'Thức ăn',
      image: 'https://images.unsplash.com/photo-1604908176997-431664c7e1d5?q=80&w=800&auto=format&fit=crop',
      itemsCount: 96,
      description: 'Hạt khô, pate, snack dinh dưỡng'
    },
    {
      name: 'Phụ kiện',
      image: 'https://images.unsplash.com/photo-1601758064135-0c2f77f7d74a?q=80&w=800&auto=format&fit=crop',
      itemsCount: 78,
      description: 'Bát ăn, đồ chơi, balo, chuồng'
    },
  ];

  const handleSelect = (cat) => {
    // TODO: navigate to category page when routing is ready
    // placeholder: console log
    // eslint-disable-next-line no-console
    console.log('Selected category:', cat);
  };

  return (
    <Container className="my-5">
      <h4 className="mb-4">Danh mục nổi bật</h4>
      <Row className="g-4">
        {categories.map((cat) => (
          <Col key={cat.name} xs={12} sm={6} md={4} lg={3}>
            <CategoryItem category={cat} onSelect={handleSelect} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Categroies;