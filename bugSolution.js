```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (mounted) {
      setCount(prevCount => prevCount + 1);
    }
  }, [mounted]);

  return <div>Count: {count}</div>;
}
```