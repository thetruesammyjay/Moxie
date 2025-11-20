# Moxie DEX - Complete File Structure

## Root Directory Structure

```
moxie-dex/
├── .github/                           # GitHub configuration
│   ├── workflows/                     # CI/CD workflows
│   │   ├── test.yml                  # Testing pipeline
│   │   ├── deploy.yml                # Deployment pipeline
│   │   └── audit.yml                 # Security audit workflow
│   └── ISSUE_TEMPLATE/               # Issue templates
├── programs/                          # Solana programs (Rust)
│   ├── moxie-router/                 # Main routing program
│   │   ├── Cargo.toml
│   │   └── src/
│   │       ├── lib.rs                # Router entry point
│   │       ├── state.rs              # Program state definitions
│   │       ├── instructions/         # Instruction handlers
│   │       │   ├── initialize.rs
│   │       │   ├── deposit.rs
│   │       │   ├── withdraw.rs
│   │       │   ├── open_position.rs
│   │       │   ├── close_position.rs
│   │       │   └── liquidate.rs
│   │       ├── errors.rs             # Custom error types
│   │       └── utils/                # Helper functions
│   ├── moxie-perp/                   # Perpetual futures engine
│   │   ├── Cargo.toml
│   │   └── src/
│   │       ├── lib.rs
│   │       ├── percolator/           # Percolator integration
│   │       │   ├── slab.rs           # Slab orderbook
│   │       │   ├── router.rs         # Cross-slab routing
│   │       │   └── matching.rs       # Order matching engine
│   │       ├── funding/              # Funding rate logic
│   │       │   ├── calculator.rs
│   │       │   └── settlement.rs
│   │       └── oracle/               # Price oracle integration
│   │           ├── pyth.rs
│   │           └── switchboard.rs
│   ├── moxie-pool/                   # Liquidity pool management
│   │   ├── Cargo.toml
│   │   └── src/
│   │       ├── lib.rs
│   │       ├── meteora/              # Meteora DLMM integration
│   │       │   ├── dlmm.rs
│   │       │   └── vault.rs
│   │       └── incentives/           # LP rewards
│   │           ├── rewards.rs
│   │           └── staking.rs
│   └── moxie-governance/             # DAO and tokenomics
│       ├── Cargo.toml
│       └── src/
│           ├── lib.rs
│           ├── dao.rs                # DAO voting logic
│           ├── treasury.rs           # Treasury management
│           └── token.rs              # MOXIE token
│
├── packages/                          # Shared packages
│   ├── sdk/                          # TypeScript SDK
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── index.ts
│   │       ├── client.ts             # Main SDK client
│   │       ├── markets.ts            # Market operations
│   │       ├── trading.ts            # Trading functions
│   │       ├── types/                # TypeScript types
│   │       │   ├── market.ts
│   │       │   ├── order.ts
│   │       │   └── position.ts
│   │       └── utils/                # Utilities
│   │           ├── math.ts
│   │           └── formatting.ts
│   ├── math/                         # Trading math library
│   │   ├── package.json
│   │   └── src/
│   │       ├── index.ts
│   │       ├── leverage.ts          # Leverage calculations
│   │       ├── funding.ts           # Funding rate math
│   │       ├── liquidation.ts      # Liquidation price calc
│   │       └── pnl.ts               # P&L calculations
│   └── types/                        # Shared type definitions
│       ├── package.json
│       └── src/
│           ├── index.ts
│           ├── market.ts
│           ├── user.ts
│           └── events.ts
│
├── services/                          # Microservices
│   ├── api/                          # Main API service
│   │   ├── package.json
│   │   ├── Dockerfile
│   │   └── src/
│   │       ├── index.ts              # API entry point
│   │       ├── server.ts             # Express/Fastify server
│   │       ├── graphql/              # GraphQL API
│   │       │   ├── schema.graphql
│   │       │   ├── resolvers/
│   │       │   │   ├── market.ts
│   │       │   │   ├── trading.ts
│   │       │   │   └── user.ts
│   │       │   └── context.ts
│   │       ├── rest/                 # REST API
│   │       │   ├── routes/
│   │       │   │   ├── markets.ts
│   │       │   │   ├── orders.ts
│   │       │   │   └── positions.ts
│   │       │   └── middleware/
│   │       │       ├── auth.ts
│   │       │       └── rateLimit.ts
│   │       ├── websocket/            # WebSocket server
│   │       │   ├── server.ts
│   │       │   ├── handlers/
│   │       │   │   ├── orderbook.ts
│   │       │   │   └── trades.ts
│   │       │   └── pubsub.ts
│   │       └── database/             # Database layer
│   │           ├── prisma.schema
│   │           └── repositories/
│   │               ├── market.ts
│   │               └── user.ts
│   ├── indexer/                      # Blockchain indexer
│   │   ├── package.json
│   │   ├── Dockerfile
│   │   └── src/
│   │       ├── index.ts
│   │       ├── solana/               # Solana indexing
│   │       │   ├── listener.ts
│   │       │   ├── parser.ts
│   │       │   └── processor.ts
│   │       ├── polymarket/           # Polymarket sync
│   │       │   ├── gamma.ts
│   │       │   ├── clob.ts
│   │       │   └── sync.ts
│   │       └── storage/              # Data storage
│   │           ├── postgres.ts
│   │           └── redis.ts
│   ├── engine/                       # Trading engine
│   │   ├── package.json
│   │   ├── Dockerfile
│   │   └── src/
│   │       ├── index.ts
│   │       ├── orderbook/            # Order management
│   │       │   ├── manager.ts
│   │       │   ├── matching.ts
│   │       │   └── settlement.ts
│   │       ├── risk/                 # Risk management
│   │       │   ├── margin.ts
│   │       │   ├── exposure.ts
│   │       │   └── limits.ts
│   │       └── execution/            # Trade execution
│   │           ├── executor.ts
│   │           └── slippage.ts
│   ├── liquidator/                   # Liquidation bot
│   │   ├── package.json
│   │   ├── Dockerfile
│   │   └── src/
│   │       ├── index.ts
│   │       ├── monitor.ts            # Position monitoring
│   │       ├── calculator.ts         # Liquidation calc
│   │       └── executor.ts           # Liquidation execution
│   ├── market-maker/                 # Market making bot
│   │   ├── package.json
│   │   ├── Dockerfile
│   │   └── src/
│   │       ├── index.ts
│   │       ├── strategies/           # MM strategies
│   │       │   ├── grid.ts
│   │       │   ├── spread.ts
│   │       │   └── arbitrage.ts
│   │       └── inventory/            # Inventory management
│   │           ├── manager.ts
│   │           └── rebalancer.ts
│   └── bridge/                       # Cross-chain bridge service
│       ├── package.json
│       ├── Dockerfile
│       └── src/
│           ├── index.ts
│           ├── polymarket/           # Polymarket bridge
│           │   ├── client.ts
│           │   └── executor.ts
│           └── solana/               # Solana operations
│               ├── jupiter.ts
│               └── transactions.ts
│
├── apps/                              # Frontend applications
│   ├── web/                          # Main web interface
│   │   ├── package.json
│   │   ├── next.config.js
│   │   ├── tailwind.config.js
│   │   └── src/
│   │       ├── app/                  # Next.js app router
│   │       │   ├── layout.tsx
│   │       │   ├── page.tsx
│   │       │   ├── markets/
│   │       │   │   ├── page.tsx
│   │       │   │   └── [id]/
│   │       │   │       └── page.tsx
│   │       │   ├── trade/
│   │       │   │   └── [market]/
│   │       │   │       └── page.tsx
│   │       │   ├── portfolio/
│   │       │   │   └── page.tsx
│   │       │   └── copy-trading/
│   │       │       ├── page.tsx
│   │       │       └── [trader]/
│   │       │           └── page.tsx
│   │       ├── components/           # React components
│   │       │   ├── ui/               # UI components
│   │       │   │   ├── Button.tsx
│   │       │   │   ├── Card.tsx
│   │       │   │   └── Modal.tsx
│   │       │   ├── trading/          # Trading components
│   │       │   │   ├── OrderBook.tsx
│   │       │   │   ├── TradingView.tsx
│   │       │   │   ├── OrderForm.tsx
│   │       │   │   └── PositionList.tsx
│   │       │   ├── markets/          # Market components
│   │       │   │   ├── MarketCard.tsx
│   │       │   │   └── MarketList.tsx
│   │       │   └── wallet/           # Wallet components
│   │       │       ├── ConnectButton.tsx
│   │       │       └── WalletModal.tsx
│   │       ├── hooks/                # React hooks
│   │       │   ├── useMarket.ts
│   │       │   ├── useOrderbook.ts
│   │       │   ├── useTrade.ts
│   │       │   └── useWallet.ts
│   │       ├── lib/                  # Libraries
│   │       │   ├── api.ts
│   │       │   ├── websocket.ts
│   │       │   └── analytics.ts
│   │       └── styles/               # Styles
│   │           └── globals.css
│   ├── mobile/                       # React Native app
│   │   ├── package.json
│   │   ├── app.json
│   │   └── src/
│   │       ├── App.tsx
│   │       ├── screens/
│   │       ├── components/
│   │       └── navigation/
│   └── trading-terminal/             # Advanced trading UI
│       ├── package.json
│       └── src/
│           ├── index.tsx
│           ├── layouts/
│           ├── widgets/
│           └── themes/
│
├── infrastructure/                    # Infrastructure configs
│   ├── docker/                       # Docker configurations
│   │   ├── Dockerfile.api
│   │   ├── Dockerfile.indexer
│   │   ├── Dockerfile.engine
│   │   └── docker-compose.yml
│   ├── kubernetes/                   # Kubernetes manifests
│   │   ├── namespace.yaml
│   │   ├── deployments/
│   │   │   ├── api.yaml
│   │   │   ├── indexer.yaml
│   │   │   └── engine.yaml
│   │   ├── services/
│   │   │   └── ingress.yaml
│   │   └── configmaps/
│   │       └── config.yaml
│   ├── terraform/                    # Infrastructure as code
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── modules/
│   │   │   ├── networking/
│   │   │   ├── compute/
│   │   │   └── database/
│   │   └── environments/
│   │       ├── dev/
│   │       ├── staging/
│   │       └── production/
│   └── scripts/                      # Deployment scripts
│       ├── deploy.sh
│       ├── rollback.sh
│       └── health-check.sh
│
├── tests/                             # Test suites
│   ├── unit/                         # Unit tests
│   ├── integration/                  # Integration tests
│   ├── e2e/                         # End-to-end tests
│   └── load/                        # Load testing
│
├── docs/                              # Documentation
│   ├── api/                          # API documentation
│   ├── architecture/                 # Architecture docs
│   ├── deployment/                   # Deployment guides
│   └── tutorials/                    # User tutorials
│
├── scripts/                           # Utility scripts
│   ├── setup.sh                      # Initial setup
│   ├── dev.sh                        # Development helper
│   └── migrate.sh                    # Database migrations
│
├── .env.example                       # Environment variables template
├── .gitignore                         # Git ignore file
├── .prettierrc                        # Prettier config
├── .eslintrc.js                      # ESLint config
├── Anchor.toml                        # Anchor framework config
├── Cargo.toml                         # Rust workspace config
├── package.json                       # Root package.json
├── pnpm-workspace.yaml                # PNPM workspace config
├── turbo.json                         # Turborepo config
├── README.md                          # Project documentation
├── LICENSE                            # MIT License
└── CONTRIBUTING.md                    # Contribution guidelines
```

## Key Configuration Files

### Anchor.toml
```toml
[features]
seeds = false
skip-lint = false

[programs.localnet]
moxie_router = "MoxR1234567890abcdefghijklmnopqrstuvwxyz"
moxie_perp = "MoxP1234567890abcdefghijklmnopqrstuvwxyz"
moxie_pool = "MoxL1234567890abcdefghijklmnopqrstuvwxyz"
moxie_governance = "MoxG1234567890abcdefghijklmnopqrstuvwxyz"

[registry]
url = "https://api.apr.dev"

[provider]
cluster = "Localnet"
wallet = "~/.config/solana/id.json"

[scripts]
test = "yarn run ts-mocha -p ./tsconfig.json -t 1000000 tests/**/*.ts"
```

### docker-compose.yml
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: moxie
      POSTGRES_USER: moxie
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"

  api:
    build:
      context: .
      dockerfile: infrastructure/docker/Dockerfile.api
    depends_on:
      - postgres
      - redis
    environment:
      DATABASE_URL: ${DATABASE_URL}
      REDIS_URL: ${REDIS_URL}
      SOLANA_RPC_URL: ${SOLANA_RPC_URL}
    ports:
      - "3000:3000"

  indexer:
    build:
      context: .
      dockerfile: infrastructure/docker/Dockerfile.indexer
    depends_on:
      - postgres
      - redis
    environment:
      DATABASE_URL: ${DATABASE_URL}
      REDIS_URL: ${REDIS_URL}
      SOLANA_RPC_URL: ${SOLANA_RPC_URL}

  engine:
    build:
      context: .
      dockerfile: infrastructure/docker/Dockerfile.engine
    depends_on:
      - postgres
      - redis
    environment:
      DATABASE_URL: ${DATABASE_URL}
      REDIS_URL: ${REDIS_URL}

volumes:
  postgres_data:
  redis_data:
```

### package.json (root)
```json
{
  "name": "moxie-dex",
  "version": "1.0.0",
  "description": "Permissionless Perpetual Prediction Market DEX on Solana",
  "private": true,
  "workspaces": [
    "packages/*",
    "services/*",
    "apps/*"
  ],
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,md}\"",
    "db:migrate": "prisma migrate dev",
    "db:push": "prisma db push",
    "deploy:testnet": "anchor deploy --provider.cluster testnet",
    "deploy:mainnet": "anchor deploy --provider.cluster mainnet-beta"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "prettier": "^3.0.0",
    "turbo": "^1.10.0",
    "typescript": "^5.0.0"
  },
  "engines": {
    "node": ">=20.0.0",
    "pnpm": ">=8.0.0"
  }
}
```

## Development Guidelines

### Code Organization

1. **Programs**: Solana smart contracts in Rust
2. **Packages**: Shared libraries and SDKs
3. **Services**: Backend microservices
4. **Apps**: Frontend applications
5. **Infrastructure**: Deployment and DevOps

### Naming Conventions

- **Files**: `kebab-case.ts`
- **Components**: `PascalCase.tsx`
- **Functions**: `camelCase()`
- **Constants**: `UPPER_SNAKE_CASE`
- **Rust**: `snake_case`

### Testing Strategy

- Unit tests for all business logic
- Integration tests for API endpoints
- E2E tests for critical user flows
- Load tests for performance validation

### Security Practices

- All programs audited before mainnet
- Input validation on all endpoints
- Rate limiting and DDoS protection
- Secure key management with HSMs